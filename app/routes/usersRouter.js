const express = require('express');
const Cryptr = require('cryptr');

const { User } = require('../db/models');
const { encryptionSecretKey } = require('../config');

const cryptr = new Cryptr(encryptionSecretKey);
const usersRouter = express.Router();

usersRouter.post('/', async (req, res) => {
	try {
		const { name, email, password } = req.body;
		const encryptedPassword = cryptr.encrypt(password);

		await User.create({
			name,
			email,
			role: 'user',
			password: encryptedPassword,
		});
		res.status(200).send('Successfully created an account');
	} catch (error) {
		res.status(500).send(error.message || 'Unexpected error');
	}
});

usersRouter.post('/login', async (req, res) => {
	try {
		const { email, password } = req.body;

		const user = await User.findOne({ email }).lean();
		if (user) {
			const decryptedPassword = cryptr.decrypt(user.password);
			if (password === decryptedPassword) {
				const { name, role } = user;
				return res.status(200).send({ name, role, email });
			}
			return res.status(404).send('El usuario o contraseña son incorrectos');
		}
		res.status(404).send('El usuario o contraseña son incorrectos');
	} catch (error) {
		res.status(500).send(error.message || 'Unexpected error');
	}
});

module.exports = usersRouter;
