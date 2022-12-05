const { Router } = require('express');
const loginController = require('../controllers/loginController');
const validateLogin = require('../middlewares/login.validation');

const loginRoute = Router();

loginRoute.post('/', validateLogin.validateLogin, loginController.logInUser);

module.exports = loginRoute;