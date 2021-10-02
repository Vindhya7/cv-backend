const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const projectsSchema = new Schema(
  {
    projectName: String,
    company: String,
    description: Array,
    tags: Array,
    github: String,
    imageName: String,
  },
  {
    collection: "projects",
  }
);

module.exports = mongoose.model("Projects", projectsSchema);
