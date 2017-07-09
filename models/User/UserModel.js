import mongoose, {Schema} from 'mongoose';
// const {GraphQLError} = require('graphql');

let UserSchema = new Schema({
  name: String,
  age: Number,
});

const User = mongoose.model('User', UserSchema);

export default User;
