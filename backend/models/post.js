const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema({
  title: { type: String, required: true, maxLength: 100 },
  body: { type: String, required: true, maxLength: 1000 },
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  timestamp: { type: Date, default: Date.now },
  published: { type: Boolean, required: true, default: false },
});

// Virtual for post's URL
postSchema.virtual('url').get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/post/${this._id}`;
});

// Export model
module.exports = mongoose.model('Post', postSchema);
