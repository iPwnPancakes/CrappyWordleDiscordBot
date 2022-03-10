const { MessageBroker } = require('../MessageBroker');
const { Provider } = require('./Provider');
const { BotMentioned } = require('../../Modules/Discord/Events/BotMentioned');
const { CrappyWordleEventController } = require('../../Modules/CrappyWordle/Controllers/CrappyWordleEventController');

class MessageBrokerProvider extends Provider {
    /**
     * Class meant to register all events to the message broker
     *
     * @param {MessageBroker} messageBroker
     * @param {CrappyWordleEventController} gameEventController
     */
    constructor(messageBroker, gameEventController) {
        super();
        this.messageBroker = messageBroker;
        this.gameEventController = gameEventController;
        this._eventMap = new Map();
    }

    register() {
        this._eventMap.set(BotMentioned.getName(), [this.gameEventController.handleIntentToCreateNewGame]);
    }

    boot() {
        const events = Array.from(this._eventMap.keys());
        events.forEach(eventName => {
            const listeners = this._eventMap.get(eventName);

            listeners.forEach(listener => {
                if (typeof listener === 'function') {
                    this.messageBroker.subscribe(eventName, listener);
                }
            });
        });
    }
}

module.exports = { MessageBrokerProvider };
