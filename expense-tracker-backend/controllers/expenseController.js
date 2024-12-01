
const Expense = require("../models/Expense");

// Add expense
const addExpense = async (req, res) => {
  const { category, amount } = req.body;

  const expense = new Expense({
    user: req.userId, // User ID comes from the middleware
    category,
    amount,
  });

  await expense.save();
  res.status(201).json(expense);
};

// Get all expenses
const getExpenses = async (req, res) => {
  const expenses = await Expense.find({ user: req.userId }); // Fetch expenses for the logged-in user
  res.json(expenses);
};

module.exports = { addExpense, getExpenses };
