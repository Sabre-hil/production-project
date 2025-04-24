const path = require('path');

const resolvePath = (...args) => path.resolve(__dirname, '..', '..', ...args);

module.exports = resolvePath;
