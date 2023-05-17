const express = require('express');

const { createUser, loginUser } = require('../controller/usersController');

const usersRouter = express.Router();

usersRouter.post('/', createUser);

usersRouter.post('/login', loginUser);

module.exports = usersRouter;
