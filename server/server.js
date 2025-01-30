const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const dbConnection = require("./config/db.config");
const errorHandler = require("./middleware/error");

const port = process.env.PORT || 5000;

dbConnection();

app.use(express.json());
// app.use(cors());
// app.use(express.urlencoded({ extended: true }));
//app.use("/api", require("./router"));
app.use("/api/export", require("./modules/document/routes/export.route"));
app.use(errorHandler);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
