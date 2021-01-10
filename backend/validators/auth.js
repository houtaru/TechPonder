const { validationMiddleware } = require("./common");
const { body } = require("express-validator");

const register = [
  body("email")
    .isEmail()
    .withMessage("value must be a valid email address")
    .isLength({ min: 1, max: 255 })
    .withMessage("value's length must be in range 1 to 255"),
  body("full_name")
    .isLength({ min: 1, max: 255 })
    .withMessage("value's length must be in range 1 to 255"),
  body("password")
    .matches(/^[\x20-\x7E]+$/)
    .withMessage("value must only contain allowed characters")
    .isLength({ min: 8, max: 255 })
    .withMessage("password length must be in range 8 to 255"),
];

const login = [
  body("email")
    .isEmail()
    .withMessage("value must be a valid email address")
    .isLength({ min: 1, max: 255 })
    .withMessage("value's length must be in range 1 to 255"),
  // validationMiddleware,
];

module.exports = {
  login,
  register,
};
