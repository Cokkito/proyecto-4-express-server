const express = require('express');
const Cryptr = require('cryptr');

const { User } = require('./app/db/models');
const { encryptionSecretKey } = require('./app/config');

const cryptr = new Cryptr(encryptionSecretKey);

const app = express();

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/test', async (req, res) => {
	try {
		const encryptedPassword = cryptr.encrypt('bacon');
		await User.create({
			name: 'test',
			password: encryptedPassword,
			email: 'test@live.com',
		});
	} catch (error) {
		console.log(error);
	}
	res.send('created');
});

app.get('/gettest', async (req, res) => {
	try {
		const user = await User.findOne({ email: 'test@live.com' }).lean();
		const decryptedString = cryptr.decrypt(user.password);

		res.send({ ...user, password: decryptedString });
	} catch (error) {
		console.log(error);
		res.send('error');
	}
});

module.exports = app;
