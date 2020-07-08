const express = require("express");
const router = express.Router();

const parcoursController = require("../controllers/parcours");

//Get all infos from all courses, including creator, poi, capsules and tags
router.get("/", parcoursController.getParcours);

module.exports = router;
