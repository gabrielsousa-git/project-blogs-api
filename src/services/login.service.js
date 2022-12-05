const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = process.env.JWT_SECRET;
const jwtConfig = { algorithm: 'HS256', expiresIn: '1w' };

const logInUser = async (email, password) => {
  const logedUser = await User.findOne({ where: { email, password } });
  const token = jwt.sign({ data: logedUser.dataValues }, secret, jwtConfig);

  // if (logedUser) {
  //   const token = jwt.sign({ data: logedUser.dataValues }, secret, jwtConfig);
  //   return token;
  // }

  return { user: logedUser.dataValues, token };
};

module.exports = {
  logInUser,
};