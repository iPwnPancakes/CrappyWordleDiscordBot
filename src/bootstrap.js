const { BOT_USER, DB } = require('./Infrastructure/config');
const { DiscordMessageController } = require('./Modules/Discord/Controllers/DiscordMessageController');
const { discordClientFactory } = require('./Modules/Discord/Infrastructure/DiscordClientFactory');
const { MessageBroker } = require('./Infrastructure/Services/MessageBroker');
const { ConsoleLogger } = require('./Infrastructure/Services/ConsoleLogger');
const { CrappyWordleEventController } = require('./Modules/CrappyWordle/Controllers/CrappyWordleEventController');
const { MessageBrokerProvider } = require('./Infrastructure/Providers/MessageBrokerProvider');
const { App } = require('./Infrastructure/App');
const { DiscordServerProvider } = require('./Infrastructure/Providers/DiscordServerProvider');
const { CrappyWordleService } = require('./Modules/CrappyWordle/Services/CrappyWordleService');
const { DatabaseConnectionFactory } = require('./Infrastructure/Services/Database/DatabaseConnectionFactory');
const { RandomWordService } = require('./Modules/CrappyWordle/Services/RandomWordService');
const { CommandRouter } = require('./Modules/Discord/Infrastructure/Commands/CommandRouter');
const { Tokenizer } = require('./Modules/Discord/Infrastructure/Commands/Tokenizer');
const { DisplayInvalidCommand } = require('./Modules/Discord/Commands/DisplayInvalidCommand');
const { StartCommand } = require('./Modules/Discord/Commands/StartCommand');
const { HelpCommand } = require('./Modules/Discord/Commands/HelpCommand');
const { SqliteGameRepository } = require('./Modules/CrappyWordle/Repositories/Implementations/SqliteGameRepository');

(async () => {
    const logger = new ConsoleLogger();
    const messageBroker = new MessageBroker(logger);
    const tokenizer = new Tokenizer();
    const invalidCommand = new DisplayInvalidCommand();
    const helpCommand = new HelpCommand();
    const databaseConnectionFactory = new DatabaseConnectionFactory();
    const databaseConnection = await databaseConnectionFactory.createConnection(DB);
    const randomWordService = new RandomWordService();
    const gameRepository = new SqliteGameRepository(databaseConnection);
    const startCommand = new StartCommand(randomWordService, gameRepository);
    const commandMap = createCommandMap(startCommand, helpCommand);
    const commandRouter = new CommandRouter(tokenizer, commandMap, invalidCommand);
    const messageController = new DiscordMessageController(BOT_USER, commandRouter);
    const crappyWordleService = new CrappyWordleService(gameRepository);
    const gameEventController = new CrappyWordleEventController(messageBroker, crappyWordleService, randomWordService);
    const messageBrokerProvider = new MessageBrokerProvider(messageBroker, gameEventController);
    const discordClient = discordClientFactory();
    const discordServerProvider = new DiscordServerProvider(messageController, discordClient);

    const app = new App([messageBrokerProvider, discordServerProvider]);
    app.register();
    app.boot();
})();

/**
 *
 * @param {Command} startCommand
 * @param {Command} helpCommand
 *
 * @return {Map<String, Command>}
 */
function createCommandMap(startCommand, helpCommand) {
    const map = new Map();

    map.set('start', startCommand);
    map.set('help', helpCommand);

    return map;
}
