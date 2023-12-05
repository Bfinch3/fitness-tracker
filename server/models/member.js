const mongoose = require("mongoose");

// member schema
const memberSchema = new mongoose.Schema({
  member: {
    type: String,
    unique: false,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 16,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
  },
  workouts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Workout', 
  }],
  friends: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Member',
  }],
});
//virtual friendCount
memberSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});
const Member = mongoose.model("Member", memberSchema);

module.exports = Member;
