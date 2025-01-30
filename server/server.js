const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const dbConnection = require("./config/db.config");
const errorHandler = require;

const port = process.env.PORT || 500;

dbConnection();

// app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", require("./router"));
app.use(errorHandler);
app.use("/api/export/", require("./modules/document/routes/export.route"));
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
