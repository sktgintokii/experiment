const mongoose = require('mongoose');
// const {GraphQLError} = require('graphql');

let UserSchema = new Schema({
  name: String,
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
