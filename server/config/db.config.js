const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv").config();

const dbConnection = async () => {
  const connect = mongoose
    .connect(process.env.CONNECTION_STRING)
    .then(() => {
      console.log("db connected");
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = dbConnection;
