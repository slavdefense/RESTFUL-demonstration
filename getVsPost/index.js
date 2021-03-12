const { text } = require("express");
const express = require("express");
const app = express();
const path = require("path");
const { v4: uuidv4 } = require("uuid");
uuidv4();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const intro = [
  { username: "gdawg", comment: " Hey this is me Gurkha!", id: uuidv4() },
  { username: "dips", comment: "Hey this is Dips", id: uuidv4() },
  { username: "shree", comment: "Hey yea! Nice to meet ya", id: uuidv4() },
];

app.get("/comments", (req, res) => {
  res.render("comments/index", { intro });
});

app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const user = intro.find((element) => element.id === id);

  res.render("comments/find", { user });
  console.log(user);
});

app.patch("/comments/:id", (req, res) => {
  const { id } = req.params;
  const newComment = req.body.comment;

  const foundComment = intro.find((element) => {
    return element.id === id;
  });
  foundComment.comment = newComment;
  res.redirect("/comments");
});

app.post("/comments", (req, res) => {
  console.log(req.body);

  const { username, comment } = req.body;
  intro.push({ username: username, comment: comment, id: uuidv4() });
  res.redirect("/comments");
});

app.listen(3000, (req, res) => {
  console.log("hi");
});
