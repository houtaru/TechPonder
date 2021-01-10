require("dotenv").config();

const express = require("express");
const authController = require("../controller/auth");
const authValidator = require("../validators/auth");

const router = express.Router();

router.get("/hi", (req, res) => {
  res.status(200).send("hi there");
});

// auth
router.post("/api/login", authValidator.login, authController.login);
router.post("/api/register", authValidator.register, authController.register);

module.exports = router;
