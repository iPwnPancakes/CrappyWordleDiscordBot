const dotenv = require('dotenv');
const { User } = require('../Modules/Discord/Models/User');
const { DatabaseInformation } = require('./Services/Database/DatabaseInformation');
dotenv.config();

const TOKEN = process.env.DISCORD_TOKEN || null;
const BOT_USER = new User(process.env.DISCORD_BOT_SNOWFLAKE, process.env.DISCORD_BOT_USERNAME, process.env.DISCORD_BOT_DISCRIMINATOR);
const DB = new DatabaseInformation(
    process.env.DB_DRIVER ?? 'sqlite',
    process.env.DB_DATABASE ?? 'database/testing.sqlite',
    process.env.DB_HOST ?? 'localhost',
    process.env.DB_PORT ?? 5432,
    process.env.DB_USERNAME ?? '',
    process.env.DB_PASSWORD ?? ''
);

module.exports = {
    TOKEN,
    BOT_USER,
    DB
};
