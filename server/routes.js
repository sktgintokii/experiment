import express from 'express';
import graphqlHTTP from 'express-graphql';

import config from './config/env';
import schema from '../schema';

// import graphql from 'graphql';
// import GraphQLObjectType from 'graphql/GraphQLObjectType';

const routes = (app) => {
  app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
  }));

  app.use('*', express.static(config.staticPath));
};

export default routes;
