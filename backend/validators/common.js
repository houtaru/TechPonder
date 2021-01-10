const { validateResult } = require("express-validator");
const { ERRORS } = require("../constants");
const { LogicError } = require("../utils/error");

function requireLogin(req, res, next) {
  if (!req.user) {
    throw new LogicError(ERRORS.LOGIN_REQUIRED);
  } else {
    next();
  }
}

function validationMiddleware(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new LogicError({ ...ERRORS.VALIDATION_FAILED, data: errors });
  } else {
    return next();
  }
}

module.exports = {
  requireLogin,
  validationMiddleware,
};
