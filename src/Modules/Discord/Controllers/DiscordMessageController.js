const { BotMentioned } = require('../Events/BotMentioned');
const { Message } = require('discord.js');

class DiscordMessageController {
    /**
     * @param {User} botUser
     * @param {PubSub} pubSub
     */
    constructor(botUser, pubSub) {
        this.botUser = botUser;
        this.pubsub = pubSub;

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
            this.pubsub.publish(event);
        }
    }
}

module.exports = { DiscordMessageController };
