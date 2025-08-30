class Logger {
    constructor(options = {}) {
        this.level = options.level || 'info';
        this.levels = ['trace', 'debug', 'info', 'warn', 'error'];
        this.levelIndex = this.levels.indexOf(this.level);
    }

    log(level, message) {
        if (this.levelIndex <= this.levels.indexOf(level)) {
            console.log(`[${new Date().toISOString()}] [${level.toUpperCase()}]: ${message}`);
        }
    }

    trace(message) {
        this.log('trace', message);
    }

    debug(message) {
        this.log('debug', message);
    }

    info(message) {
        this.log('info', message);
    }

    warn(message) {
        this.log('warn', message);
    }

    error(message) {
        this.log('error', message);
    }
}

module.exports = Logger;
