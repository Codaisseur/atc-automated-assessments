const { Router } = require("express");
const multer = require("multer");

const { test, copyFile, storeResults } = require("../utils");
const Test = require("../models").test;
const Submission = require("../models").submission;
const router = new Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `tests/${req.body.testKey}`);
  },
  filename: (req, file, cb) => {
    cb(null, `to-test-temp.js`);
  },
});

const upload = multer({ storage });

router.post("/submit", upload.single("code"), async (req, res, next) => {
  try {
    console.log("req.file hello?", req.file);

    const { name, classNr, testKey } = req.body;
    const parsedName = req.body.name.replace(" ", "").toLowerCase();

    // make a copy of code file
    const filename = await copyFile(parsedName, testKey);

    // run tests
    const results = await test(parsedName);

    const stored = await storeResults(
      name,
      classNr,
      filename,
      testKey,
      results
    );
    res.send(stored);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

router.get("/results/:testKey", async (req, res, next) => {
  try {
    const { testKey } = req.params;
    console.log("testKey", testKey);
    const test = await Test.findOne({
      where: { key: testKey },
      include: [Submission],
    });

    console.log(test);

    const parsedSubmissions = test.submissions.map((r) => ({
      ...r.dataValues,
      questions: r.questions.map((q) => JSON.parse(q)),
      testKey: test.key,
    }));

    res.send({ ...test.dataValues, submissions: parsedSubmissions });
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
