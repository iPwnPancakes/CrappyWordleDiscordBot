const { BOT_USER, DB_DATABASE } = require('./Infrastructure/config');
const { DiscordMessageController } = require('./Modules/Discord/Controllers/DiscordMessageController');
const { discordClientFactory } = require('./Modules/Discord/Infrastructure/DiscordClientFactory');
const { MessageBroker } = require('./Infrastructure/Services/MessageBroker');
const { ConsoleLogger } = require('./Infrastructure/Services/ConsoleLogger');
const { CrappyWordleEventController } = require('./Modules/CrappyWordle/Controllers/CrappyWordleEventController');
const { MessageBrokerProvider } = require('./Infrastructure/Providers/MessageBrokerProvider');
const { App } = require('./Infrastructure/App');
const { DiscordServerProvider } = require('./Infrastructure/Providers/DiscordServerProvider');
const { CrappyWordleService } = require('./Modules/CrappyWordle/Services/CrappyWordleService');
const { SqliteGameRepository } = require('./Modules/CrappyWordle/Repositories/Implementations/SqliteGameRepository');
const { DatabaseConnectionFactory } = require('./Infrastructure/Services/Database/DatabaseConnectionFactory');
const { RandomWordService } = require('./Modules/CrappyWordle/Services/RandomWordService');

(async () => {
    const logger = new ConsoleLogger();
    const messageBroker = new MessageBroker(logger);
    const messageController = new DiscordMessageController(BOT_USER, messageBroker);
    const databaseConnectionFactory = new DatabaseConnectionFactory(DB_DATABASE);
    const databaseConnection = await databaseConnectionFactory.createConnection();
    const gameRepository = new SqliteGameRepository(databaseConnection);
    const crappyWordleService = new CrappyWordleService(gameRepository);
    const randomWordService = new RandomWordService();
    const gameEventController = new CrappyWordleEventController(messageBroker, crappyWordleService, randomWordService);
    const messageBrokerProvider = new MessageBrokerProvider(messageBroker, gameEventController);
    const discordServerProvider = new DiscordServerProvider(messageController, discordClientFactory);

    const app = new App([messageBrokerProvider, discordServerProvider]);
    app.register();
    app.boot();
})();



