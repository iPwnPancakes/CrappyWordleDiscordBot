const { Command } = require('../Infrastructure/Commands/Command');
const { BotMentioned } = require('../Events/BotMentioned');
const { MessageBroker } = require('../../../Infrastructure/Services/MessageBroker');

class StartCommand extends Command {
    /**
     * @param {MessageBroker} messageBroker
     */
    constructor(messageBroker) {
        super();
        this.messageBroker = messageBroker;
    }

    handle() {
        const event = new BotMentioned();
        this.messageBroker.publish(event);
    }
}

module.exports = { StartCommand };
