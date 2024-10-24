const express = require("express");
const mongoose = require("mongoose");
const { userModel, todoModel } = require("./db");

mongoose
  .connect("mongodb://localhost:27017/testdb")
  .then(() => {
    console.log("conntection successful");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();
app.use(express.json());

app.post("/signup", async function (req, res) {
  console.log("Headers:", req.headers);
  console.log("Raw body:", req.rawBody);
  console.log("Parsed body:", req.body);
  console.log("Content-Type:", req.get("Content-Type"));

  const { username, email, password } = req.body || {};
  console.log("Username:", username, "Email:", email, "Password:", password);

  try {
    const user = await userModel.create({
      name: username,
      password: password,
      email: email,
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/signin", function (req, res) {});

// authenticated
app.post("/todo", function (req, res) {});

// authenticated
app.get("/todos", function (req, res) {});

app.listen(3000, () => {
  console.log("app listing on port 3000");
});
