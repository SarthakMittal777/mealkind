const User = require("../models/userModel");
const Meal = require("../models/mealModel");

exports.MealRequests = async (req, res) => {
  try {
    const mealRequests = await Meal.find({
      $expr: { $ne: ["$quantityRequested", "$quantityFulfilled"] },
    });
    res.status(200).json({ mealRequests });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.FulfillMealRequest = async (req, res) => {
  try {
    const { mealRequestId, uid } = req.body;
    const user = await User.findOne({ uid });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const meal = await Meal.findById(mealRequestId);
    await Meal.findByIdAndUpdate(mealRequestId, {
      $push: { fulfilledBy: user },
    });
    await Meal.findByIdAndUpdate(mealRequestId, {
      quantityFulfilled: meal.quantityRequested,
    });
    res.status(200).json({ message: "Meal request fulfilled" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.SupplierMealFulfillHistory = async (req, res) => {
  try {
    const { uid } = req.body;
    const user = await User.findOne({ uid });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const historyData = await Meal.find({
      $expr: { $eq: ["$quantityRequested", "$quantityFulfilled"] },
    });
    const history = historyData.filter((meal) => {
      const userFound = meal.fulfilledBy.find(
        (fulfilledUser) => fulfilledUser.uid === uid
      );
      return userFound;
    });
    res.status(200).json({ history });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.SupplierMealStats = async (req, res) => {
  try {
    const { uid } = req.body;
    const user = await User.findOne({ uid });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const historyData = await Meal.find({
      $expr: { $eq: ["$quantityRequested", "$quantityFulfilled"] },
    });
    const Fulfillhistory = historyData.filter((meal) => {
      const userFound = meal.fulfilledBy.find(
        (fulfilledUser) => fulfilledUser.uid === uid
      );
      return userFound;
    });
    const Allhistory = await Meal.find({});
    let totalRequested = 0;
    let totalFulfilled = 0;

    Allhistory?.forEach((meal) => {
      totalRequested += meal.quantityRequested;
    });
    Fulfillhistory?.forEach((meal) => {
      totalFulfilled += meal.quantityFulfilled;
    });
    res.status(200).json({ totalRequested, totalFulfilled });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
