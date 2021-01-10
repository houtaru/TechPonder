const authLogic = require("../logic/auth");
const { formatUser } = require("../utils/user");

function register(req, res, next) {
  return authLogic
    .register({
      email: req.body.email,
      full_name: req.body.full_name,
      password: req.body.password,
    })
    .then(({ user }) => {
      res.json({
        code: 0,
        msg: "Register successfully",
        data: {
          user: formatUser(user),
        },
      });
    })
    .catch(next);
}

function login(req, res, next) {
  return authLogic
    .login({
      email: req.body.email,
      password: req.body.password,
    })
    .then(({ access_token }) => {
      res.json({
        code: 0,
        msg: "Login successfully",
        data: {
          access_token,
        },
      });
    })
    .catch(next);
}
module.exports = {
  login,
  register,
};
