# Simple Logger

## Overview
`simple-logger` is a minimalistic logging library designed to streamline the logging process in JavaScript applications. It aims to promote code simplicity and readability by providing a clean and intuitive API.

## Features
- Lightweight: Just a few kilobytes.
- Easy to use: Minimal setup and straightforward syntax.
- Customizable output formats: Log messages can be formatted to suit your needs.
- Supports different log levels: Trace, Debug, Info, Warn, and Error.
- Built-in timestamping for better tracking of events.

## Installation
```bash
npm install simple-logger
```

## Usage
```javascript
const Logger = require('simple-logger');

const logger = new Logger({ level: 'info' });

logger.info('This is an info message.');
logger.error('This is an error message.');
```

## Contributing
Feel free to open issues or submit pull requests if you have suggestions or improvements!

## License
MIT License

## Author
Your Name
