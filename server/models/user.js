const mongoose = require("mongoose");
// user schema
const userSchema = new mongoose.Schema({
  username: {
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
  workouts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Workout' }],
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});
// virtual friendCount
userSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});
const User = mongoose.model("User", userSchema);

module.exports = User;
