const jest = require("jest");

const jestConfig = {
  roots: ["./tests"],
  json: true,
  outputFile: "./results/results.json",
  // displayName: "Matias Testing",
};

console.log("jest", jest);

const runTests = async () => {
  const results = await jest.runCLI(jestConfig, ["./"]);
  console.log("my results!", results.results.testResults[0]);
};

runTests();
