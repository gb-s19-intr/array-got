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


const printCharactersToList = () => {

  // Store the location of the list <ol>
  const $favChar = document.getElementById(`favChar`);

  // Clear the list of characters every time I ask to print (in case I call it multiple times)
  $favChar.innerHTML = ``;

  for ( let i = 0; i < allCharacters.length; i++ ) {
    $favChar.innerHTML += getCharacterAsHtmlString( allCharacters[i] );
  }



  // If there are no characters to print yet, return false
  if ( allCharacters.length == 0 ) {
    return false;
  }
  // If characters were printed as expected, return true
  return true;
}


// Start the application:
printCharactersToList();
