const mongoose = require("mongoose");
const dateFormat = require("../utils/dateFormat");
// Comment Schema
//make a comment js file and copy code over.
const commentSchema = new mongoose.Schema({
  commentId: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
  },
  commentBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
