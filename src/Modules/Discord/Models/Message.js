class Message {
    /**
     * @param {String} body
     * @param {Map} mentions
     */
    constructor(body, mentions) {
        this.body = body;
        this.mentions = mentions;
    }
}

module.exports = { Message };
