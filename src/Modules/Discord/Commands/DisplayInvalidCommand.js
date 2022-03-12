const { Command } = require('../Infrastructure/Commands/Command');

class DisplayInvalidCommand extends Command {
    handle() {
        console.log('Unsupported command');
    }
}

module.exports = { DisplayInvalidCommand };
