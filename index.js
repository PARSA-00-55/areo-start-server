// TODO : importing packages
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

const countries = require("./data/manifest.json");

// TODO : middle ware
app.use(cors());
app.use(express.json());

// TODO : adding rouets
app.get("/", (req, res) => {
  res.send("Areo Start server running.");
});

app.get("/countries", (req, res) => {
  res.send(countries);
});

// TODO : server listen
app.listen(port, () => {
  console.log(`Areo-start server running on port : ${port}`);
});
