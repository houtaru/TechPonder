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

async function updateOneByEmail(email, newUser) {
  const user = await findOneByEmail(email);
  return await user.update(...user, ...newUser);
}

async function deleteOneByEmail(email) {
  const user = await findOneByEmail(email);
  return await user.destroy();
}

module.exports = {
  findOneByEmail,
  createOne,
  updateOneByEmail,
  deleteOneByEmail,
};
