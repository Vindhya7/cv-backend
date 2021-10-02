const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const experienceSchema = new Schema(
  {
    company: String,
    position: String,
    date: String,
    location: String,
    github: String,
    desc: Array,
  },
  {
    collection: "experience",
  }
);

module.exports = mongoose.model("Experience", experienceSchema);
