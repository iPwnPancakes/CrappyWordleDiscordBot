class Word {
    /**
     *
     * @param {String} initial
     */
    constructor(initial) {
        this.str = initial;
    }

    /**
     *
     * @returns {String}
     */
    toString() {
        return this.str;
    }
}

module.exports = { Word };
