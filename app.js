const express = require('express');

const usersRouter = require('./app/routes/usersRouter');

const app = express();

app.get('/', (req, res) => {
	res.send('Base Express App');
});

app.use('/users', usersRouter);

module.exports = app;
