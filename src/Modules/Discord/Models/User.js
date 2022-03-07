class User {
    constructor(id, username, discriminator) {
        this._id = id;
        this._username = username;
        this._discriminator = discriminator;
    }

    getID() {
        return this._id;
    }

    getUsername() {
        return this._username;
    }

    getDiscriminator() {
        return this._discriminator;
    }
}

module.exports = { User };
