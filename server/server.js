const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const dbConnection = require("./config/db.config");
const errorHandler = require;

const port = process.env.PORT || 500;

dbConnection();

app.use(cors());

app.use(express.json());

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
