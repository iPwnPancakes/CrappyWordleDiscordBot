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
        if (message.mentions.size > 0 && message.mentions.has(this.botUser.getID())) {
            this.pubsub.publish();
        }
    }
}

module.exports = { DiscordMessageController };
