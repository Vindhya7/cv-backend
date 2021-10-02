const router = require("express").Router();
let Experience = require("../models/experience.model");

router.route("/").get((req, res) => {
  Experience.find({})
    .then((experience) => {
      res.json(experience);
    })
    .catch((err) => res.status(400).json("Error:" + err));
});

module.exports = router;
