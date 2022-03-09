const { BOT_USER } = require('./Infrastructure/config');
const { DiscordMessageController } = require('./Modules/Discord/Controllers/DiscordMessageController');
const { discordClientFactory } = require('./Modules/Discord/Infrastructure/DiscordClientFactory');
const { MessageBroker } = require('./Infrastructure/MessageBroker');
const { ConsoleLogger } = require('./Infrastructure/ConsoleLogger');
const { CrappyWordleEventController } = require('./Modules/CrappyWordle/Controllers/CrappyWordleEventController');
const { MessageBrokerProvider } = require('./Infrastructure/MessageBrokerProvider');
const { App } = require('./Infrastructure/App');
const { DiscordServerProvider } = require('./Infrastructure/DiscordServerProvider');

const logger = new ConsoleLogger();
const messageBroker = new MessageBroker(logger);
const messageController = new DiscordMessageController(BOT_USER, messageBroker);
const gameEventController = new CrappyWordleEventController(messageBroker);
const messageBrokerProvider = new MessageBrokerProvider(messageBroker, gameEventController);
const discordServerProvider = new DiscordServerProvider(messageController, discordClientFactory);

const app = new App([messageBrokerProvider, discordServerProvider]);
app.register();
app.boot();


