const path = require('path');
const express = require('express');

global.rootRequire = (relativePath) => {
  return require(path.join(__dirname, relativePath));
};

const routes = require('./routes.js');
const config = require('./config/env');
const app = express();

routes(app);

app.listen(config.port, () => {
  console.log('Server running on port %s', config.port);
});
