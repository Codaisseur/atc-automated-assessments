const characters = require("./characters.json");

// (**A**) Select the **4th** character of your characters array and console.log it.

const selectFourthCharacter = () => {
  const forthCharacter = characters[3];
  console.log("The forth Character: ", forthCharacter, "\n\n\n");
  return forthCharacter;
};

// or just-- console.log(characters[3])

//(**B**) Use an array method to locate the character object with id `78` and console.log it.
const findById = (id) => {
  const characterId78 = characters.find((char) => char.id === id);
  console.log("The Character withb ID 78: ", characterId78, "\n\n\n");
  return characterId78;
};

//(**C**) Console.log an array with only the characters that have `blood: "Half-blood"`.
const findByBlood = (bloodType) => {
  const halfBloodCharacters = characters.filter(
    (char) => char.blood === bloodType
  );
  console.log("Half blood characters: ", halfBloodCharacters, "\n\n\n");
  return halfBloodCharacters;
};

//(**D**) Console.log an array that contains only the `quotes` of each character (so strings, not object)
const getQuotes = () => {
  const charactersQuotes = characters.map((char) => char.quote);
  console.log("Characters quotes: ", charactersQuotes, "\n\n\n");
  return charactersQuotes;
};

//(**E**) Console.log an array with all characters that are not "Human".
const bySpecies = (species) => {
  const notHumanCharacters = characters.filter(
    (char) => char.species !== species
  );
  console.log("Not human characters: ", notHumanCharacters, "\n\n\n");
  return notHumanCharacters;
};

//(**F**) Console.log an array of all characters whose name **_includes_** "agr" [**Tip here**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)

const includesInName = (term) => {
  return characters.filter((c) => c.name.toLowerCase().includes(term));
};

// const characterWithAGRinName = [];
// characters.forEach((char) => {
//   const nameLower = char.name.toLocaleLowerCase();
//   if (nameLower.includes("agr")) {
//     characterWithAGRinName.push(char.name);
//   }
// });

module.exports = {
  includesInName,
  bySpecies,
  getQuotes,
  findByBlood,
  findById,
  selectFourthCharacter,
};
