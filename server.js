const { dbConnect } = require('./app/db');
const { port, mongoDbUri } = require('./app/config');

(async () => {
	try {
		await dbConnect(mongoDbUri);
		const app = require('./app');
		app.listen(port, () => {
			console.log(`Example app listening on port ${port}`);
		});
	} catch (error) {
		console.log(error);
	}
})();
