const mongoose = require('mongoose');
// Reaction Schema 
const reactionSchema = new mongoose.Schema({
  reactionId: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
  },
  reactionBody: {
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
    get: function (timestamp) {
      return new Date(timestamp).toISOString();
    },
  },
});
const Reaction = mongoose.model('Reaction', reactionSchema);
module.exports = Reaction;

// Workout Schema
const workoutSchema = new mongoose.Schema({
  workoutText: {
    type: String,
    required: true,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: function (timestamp) {
      return new Date(timestamp).toISOString();
    },
  },

username: {
    type: String,
    required: true,
  },
  reactions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reaction' }]
});
// virtual reactionCount
workoutSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});
const Workout = mongoose.model('Workout', workoutSchema);
module.exports = Workout;
