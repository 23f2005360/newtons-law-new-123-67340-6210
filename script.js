// Initial array of top 10 places
let places = [
  {
    name: 'Eiffel Tower',
    description: 'Iconic iron tower in Paris.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg'
  },
  {
    name: 'Great Wall of China',
    description: 'Ancient world wonder in China.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Mutianyu_Great_Wall_201807_09.jpg'
  },
  {
    name: 'Machu Picchu',
    description: 'Incan citadel in Peru.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Machu_Picchu%2C_Peru.jpg'
  },
  {
    name: 'Statue of Liberty',
    description: 'Famous monument in New York City.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Statue_of_Liberty_7.jpg'
  },
  {
    name: 'Sydney Opera House',
    description: 'Iconic performing arts center in Australia.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Sydney_Opera_House_-_Dec_2008.jpg'
  },
  {
    name: 'Taj Mahal',
    description: 'Mausoleum in India.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg'
  },
  {
    name: 'Colosseum',
    description: 'Ancient amphitheater in Rome.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Colosseum_in_Rome_%28front_view%29.jpg'
  },
  {
    name: 'Christ the Redeemer',
    description: 'Statue overlooking Rio de Janeiro.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Cristo_Redentor_-_Corcovado_-_Rio_de_Janeiro%2C_Brazil_-_December_2018.jpg'
  },
  {
    name: 'Santorini',
    description: 'Beautiful Greek island.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Santorini._Landscape_and_architecture._Oia.jpg'
  },
  {
    name: 'Big Ben',
    description: 'Famous clock tower in London.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Big_Ben_Westminster_Bridge_2012.jpg'
  }
];

// Function to render places
function renderPlaces() {
  const listContainer = document.getElementById('places-list');
  listContainer.innerHTML = '';
  places.forEach((place, index) => {
    const placeDiv = document.createElement('div');
    placeDiv.className = 'place-card';
    // Create image
    const img = document.createElement('img');
    img.src = place.image;
    img.alt = place.name;
    // Create name heading
    const nameH3 = document.createElement('h3');
    nameH3.textContent = place.name;
    // Create description paragraph
    const descP = document.createElement('p');
    descP.textContent = place.description;
    // Append to placeDiv
    placeDiv.appendChild(img);
    placeDiv.appendChild(nameH3);
    placeDiv.appendChild(descP);
    listContainer.appendChild(placeDiv);
  });
}

// Initial rendering of places
renderPlaces();

// Handle form submission to add new place
document.getElementById('add-place-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const nameInput = document.getElementById('place-name');
  const descInput = document.getElementById('place-description');
  const imageInput = document.getElementById('place-image');
  const name = nameInput.value.trim();
  const description = descInput.value.trim();
  const image = imageInput.value.trim();
  if (name && description && image) {
    // Add new place to array
    places.push({name, description, image});
    // Re-render places
    renderPlaces();
    // Clear the form
    document.getElementById('add-place-form').reset();
    alert('Place added successfully!');
  } else {
    alert('Please fill in all fields.');
  }
});