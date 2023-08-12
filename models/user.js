const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  first_name: { type: String, required: false, maxLength: 100 },
  family_name: { type: String, required: false, maxLength: 100 },
  username: { type: String, required: false, maxLength: 100 },
  password: { type: String, required: false },
  salt: { type: String, required: false },
  posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
});

// Virtual for user's URL
UserSchema.virtual('url').get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/user/${this._id}`;
});

// Export model
module.exports = mongoose.model('User', UserSchema);
