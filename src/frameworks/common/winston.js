import appRoot from 'app-root-path';
import { createLogger, transports as _transports } from 'winston';


const options = {
    file: {
        level: 'info',
        filename: `${appRoot}/logs/app.log`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: false,
    },
    console: {
        level: 'debug',
        handleExceptions: true,
        json: false,
        colorize: true,
    },
};


const logger = createLogger({
    transports: [
        new _transports.File(options.file),
        new _transports.Console(options.console)
    ],
    exitOnError: false, // do not exit on handled exceptions
});

// create a stream object with a 'write' function that will be used by `morgan`
logger.stream = {
    write: (message) => {
        // use the 'info' log level so the output will be picked up by both transports (file and console)
        logger.info(message);
    },
};
export default logger;
