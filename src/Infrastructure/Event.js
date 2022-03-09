const { UnsetEventNameError } = require('./Errors/UnsetEventNameError');

class Event {
    /**
     * @return {String}
     */
    getName() {
        throw new UnsetEventNameError();
    }
}

module.exports = { Event };
