const { Command } = require('../Infrastructure/Commands/Command');

class HelpCommand extends Command {
    handle() {
        // Display help text via discord bot
        console.log('asked for help');
    }
}

module.exports = { HelpCommand };
