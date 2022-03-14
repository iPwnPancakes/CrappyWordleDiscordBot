const { Provider } = require('./Provider');
const { DiscordServer } = require('../../Modules/Discord/Infrastructure/server');
const { DiscordMessageController } = require('../../Modules/Discord/Controllers/DiscordMessageController');
const { Client } = require('discord.js');

class DiscordServerProvider extends Provider {
    /**
     *
     * @param {DiscordMessageController} messageController
     * @param {Client} discordClient
     */
    constructor(messageController, discordClient) {
        super();
        this.messageController = messageController;
        this.discordClient = discordClient;
    }

    register() {

        this.server = new DiscordServer(this.discordClient, this.messageController);
    }

    boot() {
        this.server.start();
    }
}

module.exports = { DiscordServerProvider };
