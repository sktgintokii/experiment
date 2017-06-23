const express = require('express');
const graphqlHTTP = require('express-graphql');
const config = rootRequire('config/env');

const rootValue = {hello: () => 'Hello world!'};

const graphql = require('graphql');
const {GraphQLObjectType} = graphql;
console.log(GraphQLObjectType);

module.exports = (app) => {
  // app.use('/graphql', graphqlHTTP({
  //   schema: schema,
  //   rootValue,
  //   graphiql: true,
  // }));

  app.use('*', express.static(config.staticPath));
};
