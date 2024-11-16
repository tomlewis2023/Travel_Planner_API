const mongoose = require("mongoose");

const PlanSchema = new mongoose.Schema({
  destination: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  activities: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model('plan',PlanSchema)
