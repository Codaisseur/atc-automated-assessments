const jest = require("jest");

const test = async (name) => {
  const jestConfig = {
    roots: ["./tests"],
    json: true,
    outputFile: `./results/${name}-results.json`,
    silent: true,
  };

  console.log("jest", jest);

  const results = await jest.runCLI(jestConfig, ["./"]);
  console.log("my results!", results.results.testResults[0]);
};

module.exports = { test };
