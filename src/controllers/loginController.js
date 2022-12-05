const loginService = require('../services/login.service');

const logInUser = async (req, res) => {
  const { email, password } = req.body;
  const result = await loginService.logInUser(email, password);

  if (!result) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  return res.status(200).json({ token: result });
};

module.exports = {
  logInUser,
};