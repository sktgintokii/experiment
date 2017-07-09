import {GraphQLList, GraphQLNonNull, GraphQLString} from 'graphql';

import UserType from './UserType.js';
import User from './UserModel.js';

const UserQuery = {
  users: {
    type: new GraphQLList(UserType),
    description: 'All users info',
    resolve: () => {
      return User.find();
    },
  },
  user: {
    type: UserType,
    description: 'User info by id',
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLString),
        description: 'user id',
      },
    },
    resolve: (root, {id}) => {
      return User.findById(id);
    },
  },
};

export default UserQuery;
