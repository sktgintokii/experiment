const mongoose = require('mongoose');
const config = require('./env');

module.exports = () => {
  mongoose.connect(config.db.uri, config.db.options);
};
