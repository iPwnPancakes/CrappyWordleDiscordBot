const { TOKEN } = require('../../../Infrastructure/config');

class DiscordServer {
    /**
     *
     * @param {function} discordClientFactory
     * @param messageController
     */
    constructor(discordClientFactory, messageController) {
        this.discordClientFactory = discordClientFactory;
        this.messageController = messageController;
    }

    /**
     * Starts the Discord server with the token provided from config.js
     *
     * @returns {Promise<string>}
     */
    start() {
        const client = this.discordClientFactory();

        client.once('ready', () => {
            console.log('Ready!');
        });

        client.on('messageCreate', this.messageController.handleMessageCreated);

        return client.login(TOKEN);
    }
}

module.exports = { DiscordServer };
