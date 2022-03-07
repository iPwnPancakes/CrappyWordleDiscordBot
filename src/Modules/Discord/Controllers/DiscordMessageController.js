const { BotMentioned } = require('../Events/BotMentioned');

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

    handleMessageCreated(message) {
        if (message.mentions.has(this.botUser.getID())) {
            const event = new BotMentioned();
            this.pubsub.publish(event);
        }
    }
}

module.exports = { DiscordMessageController };
