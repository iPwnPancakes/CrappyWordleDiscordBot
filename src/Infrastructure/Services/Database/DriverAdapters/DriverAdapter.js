class DriverAdapter {
    /**
     * Returns single item from database
     *
     * @param {String} query
     * @param {*} data
     *
     * @return {Promise<Object>}
     */
    async get(query, data = null) {
        throw new Error('Calling method that is meant to be extended by Child class');
    }

    /**
     * Returns multiple items from database
     *
     * @param {String} query
     * @param {*} data
     *
     * @return {Promise<Object[]>}
     */
    async all(query, data = null) {
        throw new Error('Calling method that is meant to be extended by Child class');
    }

    /**
     * Runs command
     *
     * @param {String} query
     * @param {*} data
     *
     * @return Promise<void>
     */
    async run(query, data = null) {
        throw new Error('Calling method that is meant to be extended by Child class');
    }
}

module.exports = { DriverAdapter };
