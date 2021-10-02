const router = require("express").Router();
let AboutMe = require("../models/aboutme.model");

router.route("/").get((req, res) => {
  AboutMe.find()
    .then((aboutme) => {
      res.json(aboutme);
    })
    .catch((err) => res.status(400).json("Error:" + err));
});

module.exports = router;
