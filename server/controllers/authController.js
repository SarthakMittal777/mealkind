const User = require("../models/UserModel");

exports.register = async (req, res) => {
  try {
    const { name, email, type } = req.body;
    const user = await User.create({ name, email, type });
    res.status(201).json({ user });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ user });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
