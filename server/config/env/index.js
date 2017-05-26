const _ = require('lodash');

const development = require('./development.js');
const production = require('./production.js');

const defaults = {
  port: 3000,
};

const configs = {
  development,
  production,
  defaults,
};

const nodeEnv = process.env.NODE_ENV || 'development';
module.exports = _.merge(configs[nodeEnv], defaults);
