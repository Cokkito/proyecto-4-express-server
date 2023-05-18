const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');

const { corsOrigin } = require('./app/config');
const usersRouter = require('./app/routes/usersRouter');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// cors
app.use(
	cors({
		origin: '*',
		methods: ['GET', 'POST', 'UPDATE', 'DELETE', 'PATCH'],
		credentials: true,
	})
);

app.use('users', usersRouter);

app.get('/', (req, res) => {
	console.log('Pinged express app');
	res.send('Greetings');
});

module.exports = app;
