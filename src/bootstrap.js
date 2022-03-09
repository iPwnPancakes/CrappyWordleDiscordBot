const { BOT_USER } = require('./Infrastructure/config');
const { DiscordServer } = require('./Modules/Discord/Infrastructure/server');
const { DiscordMessageController } = require('./Modules/Discord/Controllers/DiscordMessageController');
const { discordClientFactory } = require('./Modules/Discord/Infrastructure/DiscordClientFactory');
const { PubSub } = require('./Infrastructure/MessageBroker');
const { ConsoleLogger } = require('./Infrastructure/ConsoleLogger');
const { EventProvider } = require('./Infrastructure/EventProvider');
const { CrappyWordleEventController } = require('./Modules/CrappyWordle/Controllers/CrappyWordleEventController');

const logger = new ConsoleLogger();
const pubSub = new PubSub(logger);
const messageController = new DiscordMessageController(BOT_USER, pubSub);
const gameEventController = new CrappyWordleEventController(pubSub);
const eventProvider = new EventProvider(gameEventController);
eventProvider.boot();

const events = Array.from(eventProvider.getEventMap().keys());
events.forEach(eventName => {
    const listeners = eventProvider.getEventMap().get(eventName);

    listeners.forEach(listener => {
        if (typeof listener === 'function') {
            pubSub.subscribe(eventName, listener);
        }
    });
});

const server = new DiscordServer(discordClientFactory, messageController);

server.start();
