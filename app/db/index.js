const mongoose = require('mongoose');

const dbConnect = (mongoDbUri) => {
	try {
		mongoose.connect(mongoDbUri);
		console.log('Successfully connected to mongo');
	} catch (error) {
		console.log(`failed to connect to mongo ${error.message}`);
	}
};

module.exports = {
	dbConnect,
};
