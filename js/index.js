// Combine rows and columns... we get a TABLE!
const allCharacters = [
  { name: `Tyrian`,  house: `Lannister`,  actor: `Peter Dinklage`,      status: `alive` },  // 0
  { name: `Sansa`,   house: `Stark`,      actor: `Sophie Turner`,       status: `alive` },  // 1
  { name: `Bronn`,   house: `Blackwater`, actor: `Jerome Flynn`,        status: `alive` },  // 2
  { name: `Brianne`, house: `Tarth`,      actor: `Gwendoline Christie`, status: `alive` },  // 3
];

// Create a variable to hold which character I want
let i = 0;

// Put the first object into a variable
const char = allCharacters[i]; 

// Store the location of the list <ol>
const $favChar = document.getElementById(`favChar`);

// Put one character into the document
$favChar.innerHTML = `
  <li>
    <h2>${char.name} of House ${char.house}</h2>
    <ul>
      <li>Played By: ${char.actor}</li>
      <li>Status: ${char.status}</li>
    </ul>
  </li>`;

      

