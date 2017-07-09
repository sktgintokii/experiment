import {GraphQLObjectType, GraphQLSchema} from 'graphql';
import UserQuery from '../models/User/UserQuery';
import UserMutation from '../models/User/UserMutation';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      users: UserQuery.users,
      user: UserQuery.user,
      // products: ProductQuery.products,
      // product: ProductQuery.product,
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

export default schema;
