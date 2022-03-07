const { BOT_USER } = require('./Infrastructure/config');
const { DiscordServer } = require('./Modules/Discord/Infrastructure/server');
const { DiscordMessageController } = require('./Modules/Discord/Controllers/DiscordMessageController');
const { discordClientFactory } = require('./Modules/Discord/Infrastructure/DiscordClientFactory');
const { PubSub } = require('./Infrastructure/PubSub');

const pubSub = new PubSub();
const messageController = new DiscordMessageController(BOT_USER, pubSub);
const server = new DiscordServer(discordClientFactory, messageController);

server.start();