const _ = require('lodash');
const path = require('path');

const rootPath = path.join('../..');
const development = require('./development.js');
const production = require('./production.js');

const defaults = {
  port: 3000,
  db: {
    uri: 'mongodb://localhost/experiment',
    options: {},
  },
  staticPath: path.join(rootPath, 'dist'),
};

const configs = {
  development,
  production,
  defaults,
};

const nodeEnv = process.env.NODE_ENV || 'development';
module.exports = _.merge(configs[nodeEnv], defaults);
