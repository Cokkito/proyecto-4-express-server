const dotEnv = require('dotenv');
const joi = require('joi');

dotEnv.config();

const envVarsSchema = joi.object({
	NODE_ENV: joi.string().default('development'),
	PORT: joi.number(),
	MONGO_DB_URI: joi.string().required(),
	ENCRYPTION_SECRET_KEY: joi.string().required(),
});

const { error, value: envVars } = envVarsSchema.validate(process.env, {
	allowUnknown: true,
});
if (error) throw new Error(`Config validation error: ${error.message}`);

module.exports = {
	nodeEnv: envVars.NODE_ENV,
	port: envVars.PORT,
	mongoDbUri: envVars.MONGO_DB_URI,
	encryptionSecretKey: envVars.ENCRYPTION_SECRET_KEY,
};
