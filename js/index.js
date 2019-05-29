// Combine rows and columns... we get a TABLE!
const allCharacters = [
  { name: `Tyrian`,  house: `Lannister`,  actor: `Peter Dinklage`,      status: `dead` },  // 0
  { name: `Sansa`,   house: `Stark`,      actor: `Sophie Turner`,       status: `alive` },  // 1
  { name: `Bronn`,   house: `Blackwater`, actor: `Jerome Flynn`,        status: `alive` },  // 2
  { name: `Brianne`, house: `Tarth`,      actor: `Gwendoline Christie`, status: `alive` },  // 3
];

// Takes: "char" (Object) holding character properties
// Return: HTML "<li>" (String) of that charcters profile
const formatCharacterToHtml = (char) => {

  let dead = ``;
  if (char.status == `dead`) {
    dead = `<span class="dead"> Dead</span>`;
  }

  return `
    <li>
      <h2>${char.name} of House ${char.house}${dead}</h2>
      <ul>
        <li>Played By: ${char.actor}</li>
        <li>Status: ${char.status}</li>
      </ul>
    </li>`;
}


// Store the location of the list <ol>
const $favChar = document.getElementById(`favChar`);


// Create a variable to hold which character I want

let i = 0;
$favChar.innerHTML += formatCharacterToHtml( allCharacters[i] );
i++;
$favChar.innerHTML += formatCharacterToHtml( allCharacters[i] );
i++;
$favChar.innerHTML += formatCharacterToHtml( allCharacters[i] );
i++;
$favChar.innerHTML += formatCharacterToHtml( allCharacters[i] );



      

