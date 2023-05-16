const mongoose = require('mongoose');

const User = require('../schemas/user');

const UserModel = mongoose.model(User.name, User.schema);

module.exports = {
	User: UserModel,
};
