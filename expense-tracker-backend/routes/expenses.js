const express = require("express");
const router = express.Router();
const { addExpense, getExpenses } = require("../controllers/expenseController");
const verifyToken = require("../middleware/auth"); // JWT verification middleware

// Add expense (protected route)
router.post("/add", verifyToken, addExpense);

// Get all expenses (protected route)
router.get("/", verifyToken, getExpenses);

module.exports = router;
