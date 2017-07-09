import _ from 'lodash';
import path from 'path';

import development from './development.js';
import production from './production.js';

const rootPath = path.join('../..');
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
const config = _.merge(configs[nodeEnv], defaults);

export default config;
