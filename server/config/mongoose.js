import mongoose from 'mongoose';
import Promise from 'bluebird';
import config from './env';

const init = () => {
  mongoose.Promise = Promise;
  mongoose.connect(config.db.uri, config.db.options);
};

export default init;
