const { Event } = require('../../../Infrastructure/Event');

class BotMentioned extends Event {
    static getName() {
        return 'BotMentioned';
    }
}

module.exports = { BotMentioned };
