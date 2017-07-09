import express from 'express';

import initMongoose from './config/mongoose.js';
import initRoutes from './routes.js';
import config from './config/env';

const app = express();

initMongoose();
initRoutes(app);

app.listen(config.port, () => {
  console.log('Server running on port %s', config.port);
});
