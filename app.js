const express = require('express');
var bodyParser = require('body-parser');

const usersRouter = require('./app/routes/usersRouter');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/users', usersRouter);

app.get('/', (req, res) => {
	res.send('Base Express App');
});

module.exports = app;
