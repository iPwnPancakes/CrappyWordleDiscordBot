class ConsoleLogger {
    emergency(message) {
        this.log(message);
    }

    alert(message) {
        this.log(message);
    }

    critical(message) {
        this.log(message);
    }

    error(message) {
        this.log(message);
    }

    warning(message) {
        this.log(message);
    }

    notice(message) {
        this.log(message);
    }

    info(message) {
        this.log(message);
    }

    debug(message) {
        this.log(message);
    }

    log(str) {
        console.log(`[INFO] ${ str }`);
    }
}

module.exports = { ConsoleLogger };
