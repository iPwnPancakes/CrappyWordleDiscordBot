const { Word } = require('./Word');

class Guess extends Word {
    /**
     *
     * @param {String} str
     */
    constructor(str) {
        super(str);
    }

    /**
     * @param {Word} word
     *
     * @returns {Word}
     */
    getCharacterUnion(word) {
        return word;
    }
}

module.exports = { Guess };
