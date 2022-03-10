class DatabaseConnection {
    constructor(driver) {
        this.driver = driver;
    }

    /**
     * Get single row
     *
     * @param {String} query
     * @param {*} data
     *
     * @return Object
     */
    async get(query, data = null) {
        return this.driver.get(query, data);
    }

    /**
     * Get multiple rows
     *
     * @param query
     * @param data
     *
     * @return Object[]
     */
    async all(query, data = null) {
        return this.driver.all(query, data);
    }

    /**
     * Insert or update rows
     *
     * @param query
     * @param data
     * @returns {Promise}
     */
    async insert(query, data = null) {
        return this.driver.run(query, data);
    }
}

module.exports = { DatabaseConnection };
