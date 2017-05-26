const express = require('express');
const graphqlHTTP = require('express-graphql');
const config = rootRequire('config/env');
const schema = rootRequire('graphql').schema;

const rootValue = {hello: () => 'Hello world!'};

module.exports = (app) => {
  app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue,
    graphiql: true,
  }));

  app.use('*', express.static(config.staticPath));
};
