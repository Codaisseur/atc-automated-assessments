const {
  findById,
  selectFourthCharacter,
  findByBlood,
  getQuotes,
  includesInName,
  bySpecies,
} = require("./to-test-temp");

const characters = require("./characters.json");

describe("Testing ATC assessment submission", () => {
  describe("1", () => {
    test("Should return the 4th character in the array", () => {
      expect(selectFourthCharacter()).toEqual(characters[3]);
    });
  });

  describe("2", () => {
    test("Should return the correct character", () => {
      expect(findById(13).id).toEqual(13);
      expect(findById(34).name).toEqual("Remus Lupin");
    });
  });

  describe("3", () => {
    test("When passed a certain bloodType it should return only characters with that type", () => {
      const characters = findByBlood("Half-blood");
      expect(characters).toHaveLength(10);
      expect(characters[0].blood).toEqual("Half-blood");
    });
  });
  describe("4", () => {
    test("Should return an array that contains only the `quotes` of each character", () => {
      const quotes = characters.map((c) => c.quote);
      expect(typeof getQuotes()[0]).toBe("string");
      expect(getQuotes()).toHaveLength(quotes.length);
    });
  });
  describe("5", () => {
    test("Should return array with all characters that are not human", () => {
      const result = bySpecies("Human");
      expect(result.every((r) => r.species !== "Human")).toBe(true);
    });
  });
  describe("6", () => {
    test("When passed a certain bloodType it should return only characters with that type", () => {
      const result = includesInName("agr");
      expect(result.every((r) => r.name.includes("agr"))).toBe(true);
    });
  });
});
