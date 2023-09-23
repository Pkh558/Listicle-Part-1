const tipsContainer = document.getElementById('tips-container');

fetch('/tip')
  .then((response) => response.json())
  .then((tips) => {
    tips.forEach((tip) => {
      const card = document.createElement('div');
      card.className = 'tip-card';

      const title = document.createElement('h2');
      title.textContent = tip.title;

      const text = document.createElement('p');
      text.textContent = tip.text;

      const category = document.createElement('p');
      category.textContent = `Category: ${tip.category}`;

      const submittedBy = document.createElement('p');
      submittedBy.textContent = `Submitted by: ${tip.submittedBy}`;

      const link = document.createElement('a')
      link.textContent = 'Read More >'
      link.setAttribute('role', 'button')
      link.href = `/tip/${tip.id}`



      
      card.appendChild(title);
      card.appendChild(text);
      card.appendChild(category);
      card.appendChild(submittedBy);
      card.appendChild(link)

      tipsContainer.appendChild(card);
    });
  })
  .catch((error) => {
    console.error('Error fetching tips:', error);
  });


const renderTip = async () => {
  const requestedID = parseInt(window.location.href.split('/').pop());

  const response = await fetch('/tip');
  const data = await response.json();

  const tipContent = document.getElementById('tip-content');

  let tip;

  if (data) {
    tip = data.find(tip => tip.id === requestedID);

    //document.getElementById('image').src = tip.image;
    document.getElementById('title').textContent = tip.title;
    document.getElementById('submittedBy').textContent = 'Submitted by: ' + tip.submittedBy;
    document.getElementById('category').textContent = tip.category;
    document.getElementById('text').textContent = tip.text;
    
    document.title = `Tip - ${tip.title}`;
  } else {
    const message = document.createElement('h2');
    message.textContent = 'No Tips Available 😞';
    tipContent.appendChild(message);
  }
};

renderTip();
