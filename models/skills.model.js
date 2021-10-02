const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const skillsSchema = new Schema(
  {
    name: String,
    list: Array,
  },
  {
    collection: "technicalskills",
  }
);

module.exports = mongoose.model("Technicalskills", skillsSchema);
