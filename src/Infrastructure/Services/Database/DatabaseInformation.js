class DatabaseInformation {
    /**
     * @param {String} driver
     * @param {String} database
     * @param {String} host
     * @param {Number} port
     * @param {String} username
     * @param {String} password
     */
    constructor(driver, database, host, port, username, password) {
        this._driver = driver;
        this._database = database;
        this._host = host;
        this._port = port;
        this._username = username;
        this._password = password;
    }

    getDriver() {
        return this._driver;
    }

    getDatabase() {
        return this._database;
    }

    getHost() {
        return this._host;
    }

    getPort() {
        return this._port;
    }

    getUsername() {
        return this._username;
    }

    getPassword() {
        return this._password;
    }
}

module.exports = { DatabaseInformation };
