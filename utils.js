const jest = require("jest");
const fs = require("fs");
const Test = require("./models").test;
const Submission = require("./models").submission;

const test = async (name) => {
  const jestConfig = {
    roots: ["./tests"],
    json: true,
    outputFile: `./results/${name}-results.json`,
    silent: true,
  };

  const results = await jest.runCLI(jestConfig, ["./"]);
  return results.results;
};

const copyFile = async (name, testKey) => {
  const filename = `./codes/${name}-${testKey}.js`;
  await fs.copyFile("./to-test/to-test-temp.js", filename, (err) => {
    if (err) {
      console.log("Error Found:", err);
    }
  });

  return filename;
};

const storeResults = async (name, classNr, filename, testKey, results) => {
  const totalScore = `${results["numPassedTests"]}/${results["numTotalTests"]}`;

  console.log("results", results["testResults"][0]["testResults"]);

  const questions = results["testResults"][0]["testResults"].map((r) =>
    JSON.stringify({
      question: r.title,
      status: r.status,
      number: r.ancestorTitles[r.ancestorTitles.length - 1],
    })
  );

  const test = await Test.findOne({ where: { key: testKey } });

  const stored = await Submission.create({
    name,
    class: classNr,
    filename: filename,
    questions,
    score: totalScore,
    testId: test.id,
  });

  return stored;
};

module.exports = { test, copyFile, storeResults };
