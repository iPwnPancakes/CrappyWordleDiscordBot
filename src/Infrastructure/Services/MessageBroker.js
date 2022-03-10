const { Event } = require('../Event');

class MessageBroker {
    /**
     * @type {Map<String, Function[]>}
     */
    topics = new Map();

    constructor(logger) {
        this.logger = logger;

        this.subscribe = this.subscribe.bind(this);
        this.publish = this.publish.bind(this);
    }

    subscribe(topic, listener) {
        if (this.topics.has(topic)) {
            const listeners = this.topics.get(topic);
            listeners.push(listener);
            this.topics.set(topic, listeners);
        } else {
            this.topics.set(topic, [listener]);
        }
    }

    /**
     * Notify any listeners of an event
     *
     * @param {Event} event
     */
    publish(event) {
        const eventClassName = event.constructor.name;
        this.logger.log(`Event: ${ eventClassName } was published`);
        if (this.topics.has(eventClassName)) {
            const listeners = this.topics.get(eventClassName);
            listeners.forEach(listener => listener(event));
        }
    }
}

module.exports = { MessageBroker };
