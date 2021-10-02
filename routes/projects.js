const router = require("express").Router();
let Projects = require("../models/projects.model");

router.route("/").get((req, res) => {
  Projects.find({})
    .then((projects) => {
      res.json(projects);
    })
    .catch((err) => res.status(400).json("Error:" + err));
});

module.exports = router;
