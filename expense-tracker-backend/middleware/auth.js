const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  // Get the token from the request header
  const token = req.header("x-auth-token");

  // If no token is found, respond with an error
  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  // Verify the token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the user ID to the request object
    req.userId = decoded.id;

    // Move to the next middleware or route handler
    next();
  } catch (err) {
    // If token is invalid, respond with an error
    return res.status(400).json({ message: "Invalid token" });
  }
};

module.exports = verifyToken;
