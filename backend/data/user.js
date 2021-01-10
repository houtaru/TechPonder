const { sequelize } = require("../models");

async function findOneByEmail(email) {
  return await sequelize.models.User.findOne({
    where: { email },
  });
}

async function createOne({ full_name, email, password }) {
  const user = await sequelize.models.User.create({
    full_name: full_name,
    email: email,
    password: password,
  });
  return user;
}

module.exports = {
  findOneByEmail,
  createOne,
};
