const { BOT_USER } = require('./Infrastructure/config');
const { DiscordServer } = require('./Modules/Discord/Infrastructure/server');
const { DiscordMessageController } = require('./Modules/Discord/Controllers/DiscordMessageController');
const { discordClientFactory } = require('./Modules/Discord/Infrastructure/DiscordClientFactory');
const { MessageBroker } = require('./Infrastructure/MessageBroker');
const { ConsoleLogger } = require('./Infrastructure/ConsoleLogger');
const { EventProvider } = require('./Infrastructure/EventProvider');
const { CrappyWordleEventController } = require('./Modules/CrappyWordle/Controllers/CrappyWordleEventController');

const logger = new ConsoleLogger();
const messageBroker = new MessageBroker(logger);
const messageController = new DiscordMessageController(BOT_USER, messageBroker);
const gameEventController = new CrappyWordleEventController(messageBroker);
const eventProvider = new EventProvider(gameEventController);
eventProvider.boot();

const events = Array.from(eventProvider.getEventMap().keys());
events.forEach(eventName => {
    const listeners = eventProvider.getEventMap().get(eventName);

    listeners.forEach(listener => {
        if (typeof listener === 'function') {
            messageBroker.subscribe(eventName, listener);
        }
    });
});

const server = new DiscordServer(discordClientFactory, messageController);

server.start();
