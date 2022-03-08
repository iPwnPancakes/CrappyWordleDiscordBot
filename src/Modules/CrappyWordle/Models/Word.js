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
     * @param {Number} at
     * @returns {string}
     */
    getCharAt(at) {
        return this.str.charAt(at);
    }

    /**
     *
     * @param {String} char
     * @param {Number} at
     */
    setCharAt(char, at) {
        if (at < this.str.length && at >= 0) {
            let asArr = this.str.split('');
            asArr[at] = char;
            this.str = asArr.join('');
        }
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
