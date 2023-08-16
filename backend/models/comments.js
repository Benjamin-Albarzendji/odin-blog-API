const mongoose = require('mongoose');

const { Schema } = mongoose;

const commentSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  title: { type: String, required: true, maxLength: 100 },
  body: { type: String, required: true, maxLength: 200 },
  post: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
  timestamp: { type: Date, required: true, default: Date.now },
});

// Export model
module.exports = mongoose.model('Comment', commentSchema);
