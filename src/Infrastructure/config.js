const dotenv = require('dotenv');
const { User } = require('../Modules/Discord/Models/User');
const path = require('path');
dotenv.config();

const TOKEN = process.env.DISCORD_TOKEN || null;
const BOT_USER = new User(process.env.DISCORD_BOT_SNOWFLAKE, process.env.DISCORD_BOT_USERNAME, process.env.DISCORD_BOT_DISCRIMINATOR);
const DB_DATABASE = path.join(__dirname, '..', '..', 'database', process.env.DB_DATABASE ?? 'testing.sqlite');

module.exports = { TOKEN, BOT_USER, DB_DATABASE };
