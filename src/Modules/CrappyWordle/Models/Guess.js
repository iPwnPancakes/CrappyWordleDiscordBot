const { Word } = require('./Word');

class Guess extends Word {
    constructor(guess) {
        super(guess);
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
