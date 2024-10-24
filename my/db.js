const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const objId = Schema.ObjectId;

const User = new Schema({
  name: String,
  email: String,
  password: String,
});

const Todo = new Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const userModel = mongoose.model("User", User);
const todoModel = mongoose.model("Todo", Todo);

module.exports = { userModel, todoModel };
