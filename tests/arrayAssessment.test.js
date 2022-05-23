const {
  findById,
  selectFourthCharacter,
  findByBlood,
} = require("../content/submission");
const characters = require("../content/characters.json");

describe("Testing ATC assessment submission", () => {
  describe("#selectFourthCharacter", () => {
    test("Should return the 4th character in the array", () => {
      expect(selectFourthCharacter()).toEqual(characters[3]);
    });
  });

  describe("#findById", () => {
    test("Should return the correct character", () => {
      expect(findById(13).id).toEqual(13);
      expect(findById(34).name).toEqual("Remus Lupin");
    });
  });

  // describe("#findByBlood", () => {
  //   test("When passed a certain bloodType it should return only characters with that type", () => {
  //     expect(findByBlood("Half-blood"))
  //   })
  // })
});
