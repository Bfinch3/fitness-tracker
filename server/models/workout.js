const mongoose = require("mongoose");
// Comment Schema
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
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
    },
  },
});

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;

// Workout Schema
const workoutSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  workoutTitle: {
    type: String,
    required: true,
    maxlength: 280,
  },
  workoutText: {
    type: String,
    required: true,
    maxlength: 280,
  },
  workoutType: {
    type: String,
    enum: [
      "Strength",
      "Meditation",
      "Yoga",
      "Cardio",
      "Cycling",
      "Outdoor",
      "Running",
      "Walking",
      "Stretching",
    ],
    required: true,
  },
  url: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});
// virtual commentCount
workoutSchema.virtual("commentCount").get(function () {
  return this.comments.length;
});
const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;
