const Query = require("../models/queryModel");
const User = require("../models/userModel");

exports.query = async (req, res) => {
  try {
    const { uid, query } = req.body;
    const user = await User.findOne({ uid });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    await Query.create({ query, createdBy: user });
    res.status(201).json({ message: "Query submitted successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
