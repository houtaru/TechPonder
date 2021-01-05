const sequelize = require("../models");

async function findByEmail(email) {
  return await sequelize.models.User.findOne({
    where: { email },
  });
}

module.exports = {
  findByEmail,
};
