const sequelize = require("../models");

function formatUser(user) {
  return {
    full_name: user.full_name,
    email: user.email,
  };
}

module.exports = {
  formatUser,
};
