const jest = require("jest");
const fs = require("fs");
const Test = require("./models").test;

const test = async (name) => {
  const jestConfig = {
    roots: ["./tests"],
    json: true,
    outputFile: `./results/${name}-results.json`,
    silent: true,
  };

  console.log("jest", jest);

  const results = await jest.runCLI(jestConfig, ["./"]);
  return results.results;
};

const copyFile = async (name, testType) => {
  const filename = `./codes/${name}-${testType}.js`;
  await fs.copyFile("./to-test/to-test-temp-hola.js", filename, (err) => {
    if (err) {
      console.log("Error Found:", err);
    }
  });

  return filename;
};

const storeResults = async (name, classNr, filename, testType, results) => {
  const totalScore = `${results["numPassedTests"]}/${results["numTotalTests"]}`;

  console.log("results", results["testResults"][0]["testResults"]);

  const questions = results["testResults"][0]["testResults"].map((r) =>
    JSON.stringify({ question: r.title, status: r.status })
  );

  const stored = await Test.create({
    name,
    class: classNr,
    filename: filename,
    results: questions,
    score: totalScore,
    testType,
  });

  return stored;
};

module.exports = { test, copyFile, storeResults };
