const { dbConnect } = require('./app/db');
const { port, mongoDbUri } = require('./app/config');
const app = require('./app');

dbConnect(mongoDbUri);
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
