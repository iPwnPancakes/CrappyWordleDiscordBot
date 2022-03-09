const { BotMentioned } = require('../Events/BotMentioned');
const { MessageBroker } = require('../../../Infrastructure/MessageBroker');
const { Message } = require('discord.js');

class DiscordMessageController {
    /**
     * @param {User} botUser
     * @param {MessageBroker} messageBroker
     */
    constructor(botUser, messageBroker) {
        this.botUser = botUser;
        this.messageBroker = messageBroker;

        this.handleMessageCreated = this.handleMessageCreated.bind(this);
    }

    /**
     * This method is called anytime a new message is created while Harlod is online
     *
     * @param {Message} message
     */
    handleMessageCreated(message) {
        if (message.mentions.has(this.botUser.getID())) {
            const event = new BotMentioned();
            this.messageBroker.publish(event);
        }
    }
}

module.exports = { DiscordMessageController };
