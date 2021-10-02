const router = require("express").Router();
let skillsSchema = require("../models/skills.model");

router.route("/").get((req, res) => {
  skillsSchema
    .find()
    .then((skills) => {
      res.json(skills);
    })
    .catch((err) => res.status(400).json("Error:" + err));
});

module.exports = router;
