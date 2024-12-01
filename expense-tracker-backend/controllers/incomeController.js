const Income = require("../models/Income");

// Add income
const addIncome = async (req, res) => {
  const { source, amount } = req.body;

  const income = new Income({
    user: req.userId, // User ID comes from the middleware
    source,
    amount,
  });

  await income.save();
  res.status(201).json(income);
};

// Get all income
const getIncome = async (req, res) => {
  const income = await Income.find({ user: req.userId }); // Fetch income for the logged-in user
  res.json(income);
};

module.exports = { addIncome, getIncome };
