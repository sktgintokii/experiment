const graphql = require('graphql');
const GraphQLObjectType = graphql.GraphQLObjectType;
const GraphQLSchema = graphql.GraphQLSchema;

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      users: UserQuery.users,
      user: UserQuery.user,
      products: ProductQuery.products,
      product: ProductQuery.product,
    },
  }),
  mutation: new GraphQLObjectType({
    name: 'RootMutationType',
    fields: {
      addUser: UserMutation.addUser,
      deleteUser: UserMutation.deleteUser,
    },
  }),
});

module.exports = schema;
