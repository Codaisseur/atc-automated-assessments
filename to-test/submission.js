const characters = require("./characters.json");

const selectFourthCharacter = () => {
  const forthCharacter = characters[3];
  console.log("The forth Character: ", forthCharacter, "\n\n\n");
  return forthCharacter;
};

const findById = (id) => {
  const characterId78 = characters.find((char) => char.id === id);
  console.log("The Character withb ID 78: ", characterId78, "\n\n\n");
  return characterId78;
};

const findByBlood = (bloodType) => {
  const halfBloodCharacters = characters.filter(
    (char) => char.blood === bloodType
  );
  console.log("Half blood characters: ", halfBloodCharacters, "\n\n\n");
  return halfBloodCharacters;
};

const getQuotes = () => {
  const charactersQuotes = characters.map((char) => char.quote);
  console.log("Characters quotes: ", charactersQuotes, "\n\n\n");
  return charactersQuotes;
};

const bySpecies = (species) => {
  const notHumanCharacters = characters.filter(
    (char) => char.species !== species
  );
  console.log("Not human characters: ", notHumanCharacters, "\n\n\n");
  return notHumanCharacters;
};

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
