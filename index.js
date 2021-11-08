const express = require("express");
require('dotenv').config();

const app = express();

const port = process.env.SERVER_PORT || 5000;
const name = process.env.NAME;
const city = process.env.CITY;
const language = process.env.LANGUAGE;

app.get("/", (request, response) => {
  response.send(`I am ${name}, wilder in ${city}, and I love ${language}`);
});

app.listen(port);