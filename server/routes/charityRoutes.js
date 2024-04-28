const express = require("express");
const router = express.Router();
const charityController = require("../controllers/charityController");

router.post("/request-meals", charityController.CharityMealRequest);

router.post(
  "/meal-request-history",
  charityController.CharityMealRequestHistory
);

router.post("/stats", charityController.CharityMealStats);

module.exports = router;
