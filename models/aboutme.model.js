const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const aboutmeSchema = new Schema(
  {
    name: String,
    email: String,
    phone: String,
    location: String,
    github: String,
    linkedin: String,
    interests: Array,
  },
  {
    collection: "aboutme",
  }
);

module.exports = mongoose.model("Aboutme", aboutmeSchema);
