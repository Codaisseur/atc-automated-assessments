const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");

const { test } = require("./runTests");

const PORT = 4000;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "to-test/");
  },
  filename: (req, file, cb) => {
    cb(null, `to-test-temp-hola.js`);
  },
});

const upload = multer({ storage });

const app = express();

app.use(cors());
// app.use(express.json());

const copyFile = async (name) => {
  await fs.copyFile(
    "./to-test/to-test-temp-hola.js",
    `./codes/${name}-js1.js`,
    (err) => {
      if (err) {
        console.log("Error Found:", err);
      } else {
      }
    }
  );
};

app.post("/submit", upload.single("code"), async (req, res, next) => {
  try {
    console.log("req.file hello?", req.file);

    // const name = req.body.name.replace(" ", "").toLowerCase();
    // copyFile(name);
    // // make a copy of code file
    // await test(name);
    res.send("testing");
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
