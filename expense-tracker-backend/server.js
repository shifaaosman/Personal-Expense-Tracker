const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Import database connection
const connectDB = require("./config/db");

// Initialize dotenv to read .env file
dotenv.config(); // This must be called before any other code

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000', // URL of your frontend
    methods: 'GET,POST',
    allowedHeaders: 'Content-Type,Authorization'
  }));

// Check if MONGO_URI is loaded correctly
console.log("Mongo URI:", process.env.MONGO_URI); // Log the MONGO_URI to the console

// Connect to MongoDB
connectDB();

// Import routes
const authRoutes = require("./routes/auth");
const expenseRoutes = require("./routes/expenses");
const incomeRoutes = require("./routes/income");

// Use routes
app.use("/api/auth", authRoutes);
app.use("/api/expenses", expenseRoutes);
app.use("/api/income", incomeRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
