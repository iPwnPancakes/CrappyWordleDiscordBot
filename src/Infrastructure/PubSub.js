class PubSub {
    constructor(logger) {
        this.logger = logger;
    }

    subscribe(topic, listener) {
    }

    publish(topic, data) {
        this.logger.log(`Event: ${ topic.constructor.name } was published`);
    }
}

module.exports = { PubSub };
