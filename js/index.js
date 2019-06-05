// Takes: "char" (Object) holding character properties
// Return: HTML "<li>" (String) of that charcters profile
const getCharacterAsHtmlString = (char) => {

  // Assume the character is alive
  // let dead = ` <span class="alive">Totally alive</span>`;
  let dead = ` <span class="alive">Totally alive</span>`;

  if (char.status == `dead`) {
    dead = ` <span class="dead">Dead</span>`;
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


const printCharactersToList = (characters) => {

  // If there are no characters to print yet, return false
  if ( characters.length == 0 ) {
    return false;
  }


  // Store the location of the list <ol>
  const $favChar = document.getElementById(`favChar`);

  // Clear the list of characters every time I ask to print (in case I call it multiple times)
  $favChar.innerHTML = ``;

  characters.forEach( char => {
    $favChar.innerHTML += getCharacterAsHtmlString( char );
  })


  // Assume characters were printed as expected, return true
  return true;
}



///////////// FILTER BY STATUS /////////////
// Check if the character's status == `dead`, store the ones that match in a NEW Array and reprint
const getDeadCharacters = () => {

  const justDead = allCharacters.filter( char => char.status == `dead` )
  printCharactersToList(justDead);
}
document.getElementById(`filter-dead`).addEventListener(`click`, getDeadCharacters); // Add a listener to the `Dead` button



///////////// FILTER BY HEIGHT /////////////
// Check if the character's height > 170, store the ones that match in a NEW Array and reprint
const getTallCharacters = () => {

  const justTall = allCharacters.filter( char => char.height > 170 )
  printCharactersToList(justTall);
}
document.getElementById(`filter-tall`).addEventListener(`click`, getTallCharacters); // Add a listener to the `Tall` button



///////////// FILTER BY HOUSE /////////////
// Check if the character's house == `Stark`, store the ones that match in a NEW Array and reprint
const getStarkCharacters = () => {

  const justStarks = allCharacters.filter( char => char.house == `Stark` )
  printCharactersToList(justStarks);
}

document.getElementById(`filter-stark`).addEventListener(`click`, getStarkCharacters); // Add a listener to the `Stark` button






// Start the application:
printCharactersToList(allCharacters);
