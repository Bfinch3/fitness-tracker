const mongoose = require("mongoose");
const dateFormat = require("../utils/dateFormat"); 
// Workout Schema
const workoutSchema = new mongoose.Schema({
  // name: {
  //   type: String,
  //   required: true,
  // },
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
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"},
    
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});
// virtual commentCount
workoutSchema.virtual("commentCount").get(function () {
  return this.comments.length;
});
const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;
