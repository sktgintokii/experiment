import {
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
} from 'graphql';

import UserType from './UserType.js';
import User from './UserModel.js';

const UserMutation = {
  addUser: {
    type: UserType,
    description: 'Add a new user',
    args: {
      name: {
        type: new GraphQLNonNull(GraphQLString),
        description: 'User name',
      },
      age: {
        type: new GraphQLNonNull(GraphQLInt),
        description: 'User age',
      },
    },
    resolve: (root, {name, age}) => {
      let newUser = new User({
        name,
        age,
      });

      return newUser.save();
    },
  },
  deleteUser: {
    type: UserType,
    description: 'Delete a current user by id',
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLString),
        description: 'User id',
      },
    },
    resolve: (root, {id}) => {
      return User.findByIdAndRemove(id);
    },
  },
};

export default UserMutation;
