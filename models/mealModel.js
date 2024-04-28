const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema({
  quantityRequested: {
    type: Number,
    required: true,
  },
  quantityFulfilled: {
    type: Number,
    required: true,
  },
  createdBy: {
    type: Object,
    required: true,
  },
  fulfilledBy: {
    type: Array,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Meal = mongoose.model("Meal", mealSchema);
