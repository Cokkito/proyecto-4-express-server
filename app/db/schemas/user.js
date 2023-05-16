const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
	name: String,
	password: String,
	email: {
		type: String,
		unique: true,
	},
	role: String,
});

module.exports = {
	name: 'users',
	schema: UserSchema,
};
