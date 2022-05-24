const express = require("express");
const resultsRouter = require("./routers/results");

const cors = require("cors");

const PORT = 4000;

const app = express();

app.use(cors());
// app.use(express.json());

// submissions and results
app.use(resultsRouter);

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
