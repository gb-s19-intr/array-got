// // An "Array" of characters (This is as single column)
// const favCharNames = [
//   `Tyrian`,  // 0
//   `Sansa`,   // 1
//   `Bron`,    // 2
//   `Brianne`,  // 3
// ];

// // One character as an Object (This is a single row)
// const oneCharacter = {
//   name: `Tyrian`,
//   house: `Lannister`,
//   actor: `Peter Dinklage`,
//   status: `alive`,
// };

// Combine rows and columns... we get a TABLE!
const allCharacters = [
  { name: `Tyrian`,  house: `Lannister`,  actor: `Peter Dinklage`,      status: `alive` },  // 0
  { name: `Sansa`,   house: `Stark`,      actor: `Sophie Turner`,       status: `alive` },  // 1
  { name: `Bronn`,   house: `Blackwater`, actor: `Jerome Flynn`,        status: `alive` },  // 2
  { name: `Brianne`, house: `Tarth`,      actor: `Gwendoline Christie`, status: `alive` },  // 3
];


// Example of an expanded character (for reference)
// const oneCharacter = {
//   name: `Tyrian`,
//   house: `Lannister`,
//   actor: `Peter Dinklage`,
//   status: `alive`,
//   nicknames: [ `Tyrian the brave`, `Tyrian the tall` ],
//   spouses: [
//     { name: `Sansa`, start: `??`, end: `??`},
//     { name: `Not sure`, start: `??`, end: `??`},
//     { name: `Someone else`, start: `??`, end: `??`},
//   ]
// };