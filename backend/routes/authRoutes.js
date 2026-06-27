const express = require("express");

const router = express.Router();

router.get("/register", (req, res) => {
  res.json({
    message: "Register API working",
  });
});

router.get("/login", (req, res) => {
  res.json({
    message: "Login API working",
  });
});

module.exports = router;