const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const educationSchema = new Schema(
  {
    school_name: String,
    degree: String,
    date: String,
    location: String,
  },
  {
    collection: "education",
  }
);

module.exports = mongoose.model("Education", educationSchema);
