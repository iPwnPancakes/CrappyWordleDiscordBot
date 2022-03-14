const { TOKEN } = require('../../../Infrastructure/config');
const { Client } = require('discord.js');

class DiscordServer {
    /**
     *
     * @param {Client} discordClient
     * @param messageController
     */
    constructor(discordClient, messageController) {
        this.discordClient = discordClient;
        this.messageController = messageController;
    }

    /**
     * Starts the Discord server with the token provided from config.js
     *
     * @returns {Promise<string>}
     */
    start() {
        this.discordClient.once('ready', () => {
            console.log('Ready!');
        });

        this.discordClient.on('messageCreate', this.messageController.handleMessageCreated);

        return this.discordClient.login(TOKEN);
    }
}

module.exports = { DiscordServer };
