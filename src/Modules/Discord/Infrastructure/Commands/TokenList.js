const { Token } = require('./Token');

class TokenList {
    constructor() {
        this.tokens = [];
    }

    add(token) {
        this.tokens.push(token);
    }

    /**
     *
     * @param index
     * @return boolean
     */
    has(index) {
        return this.tokens[index] !== undefined;
    }

    /**
     *
     * @param index
     * @return {Token}
     */
    get(index) {
        if (this.tokens[index] === undefined) {
            throw new Error('Index out of bounds');
        }

        return this.tokens[index];
    }
}

module.exports = { TokenList };
