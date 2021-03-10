const express = require("express");
const app = express();
// app.set("view engine", "ejs");

app.get("/tacos", (req, res) => {
  //   const { tacos } = req.params;
  //   res.render("bell", { info: tacos });
  res.send("tacos get request");
});

app.post("/burrito", (req, res) => {
  res.send("burrito post request here");
});
app.listen(3000, (req, res) => {
  console.log("hi");
});
