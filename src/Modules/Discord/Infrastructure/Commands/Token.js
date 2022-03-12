class Token {
    constructor(str) {
        this._str = str;
    }

    getToken() {
        return this._str;
    }
}

module.exports = { Token };
