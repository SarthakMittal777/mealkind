const mongoose = require("mongoose");

const querySchema = new mongoose.Schema({
  query: {
    type: String,
    required: true,
  },
  createdBy: {
    type: Object,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Query = mongoose.model("Query", querySchema);
