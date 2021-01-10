const ERRORS = {
  BAD_REQUEST: {
    code: 1001,
    msg: "Bad request",
  },
  VALIDATION_FAILED: {
    code: 1009,
    msg: "Validation failed",
  },
  USER_NOT_FOUND: {
    code: 2001,
    msg: "User not found",
  },
  LOGIN_REQUIRED: {
    code: 3001,
    msg: "Login required",
  },
  USERNAME_EXISTS: {
    code: 3002,
    msg: "Username already exists",
  },
  EMAIL_EXISTS: {
    code: 3003,
    msg: "Email already exists",
  },
  EMAIL_USERNAME_PASSWORD_INVALID: {
    code: 3006,
    msg: "Email/Username or password is invalid",
  },
};

module.exports = {
  ERRORS,
};
