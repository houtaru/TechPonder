const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const userData = require("../data/user");
const { LogicError } = require("../utils/error");
const { ERRORS } = require("../constants");

async function register({ full_name, email, password }) {
  if (await userData.findOneByEmail(email)) {
    throw new LogicError(ERRORS.EMAIL_EXISTS);
  }

  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await userData.createOne({
    full_name,
    email,
    password: hashedPassword,
  });

  return { user };
}

async function login({ email, password }) {
  const user = await userData.findOneByEmail(email);
  if (!user) {
    throw new LogicError(ERRORS.USER_NOT_FOUND);
  }

  if (await bcrypt.compare(password, user.password)) {
    return {
      access_token: jwt.sign(
        {
          email: user.email,
          id: user.id,
        },
        process.env.JWT_SECRET,
      ),
    };
  } else {
    throw new LogicError(ERRORS.EMAIL_USERNAME_PASSWORD_INVALID);
  }
}

module.exports = {
  login,
  register,
};
