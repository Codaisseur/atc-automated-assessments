const characters = require("./characters.json");

// (**A**) Select the **4th** character of your characters array and console.log it.

const selectFourthCharacter = () => {
  return characters[3];
};

// or just-- console.log(characters[3])

//(**B**) Use an array method to locate the character object with id `78` and console.log it.
const findById = (id) => {
  return characters.filter((i) => {
    if (i.id === 78) return true;
  });
};

//(**C**) Console.log an array with only the characters that have `blood: "Half-blood"`.
const findByBlood = (bloodType) => {
  const halfBlood = [];

  characters.forEach((b) => {
    if (b.blood === "Half-blood") halfBlood.push(b);
  });
  return halfBlood;
};

//(**D**) Console.log an array that contains only the `quotes` of each character (so strings, not object)
const getQuotes = () => {
  console.log("filter on string");
  var stringFilter = characters.filter((d) => typeof d === "String");
  for (i = 0; i < stringFilter.length; i++) {
    stringFilter.push(i);
  }
  console.log(stringFilter);
  console.log("filter on string");
  return stringFilter;
};

//(**E**) Console.log an array with all characters that are not "Human".
const bySpecies = (species) => {
  const notHuman = [];

  characters.forEach((h) => {
    if (h.species !== "Human") {
      notHuman.push(h);
    }
  });
  return notHuman;
};

//(**F**) Console.log an array of all characters whose name **_includes_** "agr" [**Tip here**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)

const includesInName = (term) => {
  const substring = "agr";
  const agrName = characters.filter((agr) => {
    if (agr.name.includes(substring)) {
      return agr;
    }
  });
  return agrName;
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
