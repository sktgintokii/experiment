const {GraphQLObjectType, GraphQLID, GraphQLString} = require('graphql');

const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'A user',
  fields: {
    _id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
  },
});

module.exports = UserType;
