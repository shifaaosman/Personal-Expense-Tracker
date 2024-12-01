const express = require("express");
const router = express.Router();
const { addIncome, getIncome } = require("../controllers/incomeController");
const verifyToken = require("../middleware/auth"); // JWT verification middleware

// Add income (protected route)
router.post("/add", verifyToken, addIncome);

// Get all income (protected route)
router.get("/", verifyToken, getIncome);

module.exports = router;
