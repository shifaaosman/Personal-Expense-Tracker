const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,  // Store the plain-text password
  },
});

// You can remove the bcrypt methods since you're not hashing passwords anymore.

module.exports = mongoose.model("User", userSchema);
