const config = require('./config/env');
const express = require('express');
const app = express();

app.listen(config.port, () => {
  console.log('Server running on port %s', config.port);
});
