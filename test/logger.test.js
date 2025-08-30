const Logger = require('../src/index');

describe('Logger', () => {
    let logger;

    beforeEach(() => {
        logger = new Logger({ level: 'debug' });
    });

    it('should log messages of the correct level', () => {
        console.log = jest.fn(); // Mock console.log
        logger.info('Info message');
        expect(console.log).toHaveBeenCalledWith(expect.stringContaining('[INFO]: Info message'));
    });

    it('should not log messages below the set level', () => {
        console.log = jest.fn(); // Mock console.log
        logger.warn('Warning message');
        expect(console.log).toHaveBeenCalled();
        expect(console.log).toHaveBeenCalledWith(expect.stringContaining('[WARN]: Warning message'));

        logger.level = 'error';
        logger.warn('Another warning');
        expect(console.log).not.toHaveBeenCalledWith(expect.stringContaining('[WARN]: Another warning'));
    });
});
