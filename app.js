const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const router = require("./routes/users");

const app = express();
app.use(express.static("public"));
app.use(cors());
app.use(express.json());
app.use(router);

mongoose
  .connect(
    "mongodb+srv://ajay:Qm5c6FKbohKFSsnU@cluster0.9qnrw.mongodb.net/ajayDB?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connection Successful to Cloud MongoDB.");
  })
  .catch((err) => {
    console.log(err);
    console.log("Connection Failed.");
  });

module.exports = app;
