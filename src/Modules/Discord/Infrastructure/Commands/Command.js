class Command {
    /**
     * @return void
     */
    handle() {
        throw new Error('Calling default Command');
    }
}

module.exports = { Command };
