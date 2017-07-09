import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
} from 'graphql';

const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'A user',
  fields: {
    _id: {
      type: GraphQLID,
      description: 'user id',
    },
    name: {
      type: GraphQLString,
      description: 'user name',
    },
    age: {
      type: GraphQLInt,
      description: 'user age',
    },
  },
});

export default UserType;
