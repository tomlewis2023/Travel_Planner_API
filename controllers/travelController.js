const travelData = require("../models/travel");

//Get all Travel plans
const gettravelplans = async (req, res) => {
  try {
    const plans = await travelData.find();
    res.status(200).json(plans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Get Travelplans based on id

const getTravelplanbyId = async (req, res) => {
  try {
    const planId = req.params.id;
    const plan = await travelData.findById(planId);
    if (!plan) return res.status(404).json({ message: "Travelplan not found" });
    res.status(200).json(plan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Create Travel plan

const createTravelPlan = async (req, res) => {
  try {
    const plan = new travelData(req.body);
    await plan.save();
    res.status(201).json(plan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Travel Plan

const updateTravelplan = async (req, res) => {
  try {
    const planId = req.params.id;
    const plan = await travelData.findByIdAndUpdate(planId, req.body, {
      new: true,
    });
    if (!plan)
      return res.status(404).json({ message: "Travel plan not found" });
    res.status(200).json(plan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Delete Travel plan

const deleteTravelPlan = async (req, res) => {
  try {
    const planId = req.params.id;
    const plan = await travelData.findByIdAndDelete(planId);
    if (!plan)
      return res.status(404).json({ message: "Travel plan not found" });
    res.status(200).json({ message: "Travel plan deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  gettravelplans,
  getTravelplanbyId,
  createTravelPlan,
  updateTravelplan,
  deleteTravelPlan
};
