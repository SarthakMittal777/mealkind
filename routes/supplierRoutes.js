const express = require("express");
const router = express.Router();
const supplierController = require("../controllers/supplierController");

router.get("/meal-requests", supplierController.MealRequests);

router.put("/fulfill-meal-requests", supplierController.FulfillMealRequest);

router.post(
  "/meal-fulfill-history",
  supplierController.SupplierMealFulfillHistory
);

router.post("/stats", supplierController.SupplierMealStats);

module.exports = router;
