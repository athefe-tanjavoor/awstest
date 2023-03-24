const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.get("/", function (req, res) {
  res.send("Hi aatif from Ec2 instance! ");
});

app.listen(3300, () => {
  console.log("Listening on port 3300");
});
