const User = require("../models/userModel");
const Meal = require("../models/mealModel");

exports.CharityMealRequest = async (req, res) => {
  try {
    const { quantity, uid } = req.body;
    const user = await User.findOne({ uid });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    await Meal.create({
      quantityRequested: quantity,
      quantityFulfilled: 0,
      createdBy: user,
      fulfilledBy: [],
    });
    res.status(201).json({ message: "Meal request created" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.CharityMealRequestHistory = async (req, res) => {
  try {
    const { uid } = req.body;
    const user = await User.findOne({ uid });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const history = await Meal.find({ "createdBy.uid": uid });
    res.status(200).json({ history });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.CharityMealStats = async (req, res) => {
  try {
    const { uid } = req.body;
    const user = await User.findOne({ uid });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const history = await Meal.find({ "createdBy.uid": uid });
    let totalRequested = 0;
    let totalFulfilled = 0;
    history?.forEach((meal) => {
      totalRequested += meal.quantityRequested;
      totalFulfilled += meal.quantityFulfilled;
    });
    res.status(200).json({ totalRequested, totalFulfilled });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
