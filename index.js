
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

  const blockData = [
    {
      title: "Block 1",
      description: "Description for Block 1",
      imageUrl: "2.png"
    },
    {
      title: "Block 2",
      description: "Description for Block 2",
      imageUrl: "1.png"
    },
    {
      title: "Block 3",
      description: "Description for Block 2",
      imageUrl: "3.png"
    },
    {
      title: "Block 4",
      description: "Description for Block 2",
      imageUrl: "3.png"
    }, {
      title: "Block 5",
      description: "Description for Block 2",
      imageUrl: "3.png"
    }
  ];


  const blocks = document.querySelectorAll('.block');


  const popup = document.getElementById('popup');


  const titleElement = popup.querySelector('.title');
  const descriptionElement = popup.querySelector('.description');
  const imageContainer = popup.querySelector('.image-container');
  const closeBtn = popup.querySelector('.close-btn');


  closeBtn.addEventListener('click', function() {
    hidePopup();
  });


  blocks.forEach(block => {
    block.addEventListener('mouseenter', function(event) {
      const blockIndex = parseInt(event.target.getAttribute('data-block'));
      const blockCard = blockData[blockIndex];
      showPopup(blockCard.title, blockCard.description, blockCard.imageUrl);
    });
  });

 
  function showPopup(title, description, imageUrl) {
    titleElement.textContent = title;
    descriptionElement.textContent = description;
    imageContainer.innerHTML = `<img src="${imageUrl}" alt="${title}" width="100" height="100">`;
    popup.style.left = '0';
  }


  function hidePopup() {
    popup.style.left = '-900px';
  }
