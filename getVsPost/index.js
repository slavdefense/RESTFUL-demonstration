const { text } = require("express");
const express = require("express");
const app = express();
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const intro = [
  { username: "gdawg", comment: " Hey this is me Gurkha!" },
  { username: "dips", comment: "Hey this is Dips" },
  { username: "shree", comment: "Hey yea! Nice to meet ya" },
];

app.get("/comments", (req, res) => {
  res.render("comments/index", { intro });
});

app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});

app.post("/comments", (req, res) => {
  console.log(req.body);

  const { username, comment } = req.body;
  intro.push({ username: username, comment: comment });
});

app.listen(3000, (req, res) => {
  console.log("hi");
});
