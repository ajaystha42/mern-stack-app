const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authentication.split(" ")[1];
    const decodedToken = jwt.verify(token, "ajay_shrestha");
    next();
    // req.userData = { email: decodedToken.email, userId: decodedToken.userId };
  } catch (err) {
    res.status(401).json({
      message: "Authentication Failed!",
    });
  }
};
