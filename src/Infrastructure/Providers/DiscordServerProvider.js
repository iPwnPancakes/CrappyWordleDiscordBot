const { Provider } = require('./Provider');
const { DiscordServer } = require('../../Modules/Discord/Infrastructure/server');
const { DiscordMessageController } = require('../../Modules/Discord/Controllers/DiscordMessageController');

class DiscordServerProvider extends Provider {
    /**
     *
     * @param {DiscordMessageController} messageController
     * @param {function} discordClientFactory
     */
    constructor(messageController, discordClientFactory) {
        super();
        this.messageController = messageController;
        this.discordClientFactory = discordClientFactory;
    }

    register() {
        this.server = new DiscordServer(this.discordClientFactory, this.messageController);
    }

    boot() {
        this.server.start();
    }
}

module.exports = { DiscordServerProvider };
