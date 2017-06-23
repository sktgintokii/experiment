const {GraphQLObjectType} = require('graphql');
const UserType = require('./UserType.js');
const User = require('./UserModel.js');

const UserQuery = {
  users: {
    type: new GraphQLList(UserType),
    resolve: () => {
      return new User().find();
    }
  },
  user: {},
};

module.exports = UserQuery;
