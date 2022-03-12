const { Message } = require('discord.js');
const { CommandRouter } = require('../Infrastructure/Commands/CommandRouter');

class DiscordMessageController {
    /**
     * @param {User} botUser
     * @param {CommandRouter} commandRouter
     */
    constructor(botUser, commandRouter) {
        this.botUser = botUser;
        this.commandRouter = commandRouter;

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

        this.commandRouter.route(message.content).handle();
    }

    botWasMentioned(message) {
        return message.mentions.has(this.botUser.getID());
    }
}

module.exports = { DiscordMessageController };
