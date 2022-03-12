const { BotMentioned } = require('../Events/BotMentioned');
const { MessageBroker } = require('../../../Infrastructure/Services/MessageBroker');
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
        if (!this.botWasMentioned(message)) {
            return;
        }

        if (this._startCommandGiven(message)) {
            const event = new BotMentioned();
            this.messageBroker.publish(event);
        }
    }

    botWasMentioned(message) {
        return message.mentions.has(this.botUser.getID());
    }

    /**
     * Checks to see if start command was included in message
     *
     * @param {Message} message
     * @return {boolean}
     * @private
     */
    _startCommandGiven(message) {
        return message.content.toLowerCase().includes('start');
    }
}

module.exports = { DiscordMessageController };
