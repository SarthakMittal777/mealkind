const express = require("express");
const router = express.Router();
const generalController = require("../controllers/generalController");

router.post("/query", generalController.query);

module.exports = router;
