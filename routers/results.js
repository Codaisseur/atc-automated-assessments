const { Router } = require("express");
const multer = require("multer");

const { test, copyFile, storeResults } = require("../utils");
const router = new Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "to-test/");
  },
  filename: (req, file, cb) => {
    cb(null, `to-test-temp.js`);
  },
});

const upload = multer({ storage });

router.post("/submit", upload.single("code"), async (req, res, next) => {
  try {
    console.log("req.file hello?", req.file);

    const { name, classNr, testType } = req.body;
    const parsedName = req.body.name.replace(" ", "").toLowerCase();

    // make a copy of code file
    const filename = await copyFile(parsedName, testType);

    // run tests
    const results = await test(parsedName);

    const stored = await storeResults(
      name,
      classNr,
      filename,
      testType,
      results,
      testType
    );
    res.send(stored);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
