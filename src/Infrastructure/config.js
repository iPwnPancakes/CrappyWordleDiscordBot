const dotenv = require('dotenv');
const { User } = require('../Modules/Discord/Models/User');
dotenv.config();

const TOKEN = process.env.DISCORD_TOKEN || null;
const BOT_USER = new User(process.env.DISCORD_BOT_SNOWFLAKE, process.env.DISCORD_BOT_USERNAME, process.env.DISCORD_BOT_DISCRIMINATOR);

module.exports = { TOKEN, BOT_USER };
