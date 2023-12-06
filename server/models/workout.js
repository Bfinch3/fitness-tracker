const {Schema, model} = require('mongoose');
const dateFormat = require('../utils/dateFormat');
// Reaction Schema 
const reactionSchema = new Schema(
  {
  reactionId: {
     type: String, //mongoose.Schema.Types.ObjectId,
    // default: () => new mongoose.Types.ObjectId(),
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
    get: (timestamp) => dateFormat(timestamp),
    },
  },

);
const Reaction = model('Reaction', reactionSchema);
module.exports = Reaction;

// Workout Schema
const workoutSchema = new Schema({
  workoutText: {
    type: String,
    required: true,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },

userId: { type: Schema.Types.ObjectId, ref: 'User'},
    
  
reactions:[{ type: Schema.Types.ObjectId, ref: 'Reaction' }]
});
// virtual reactionCount
workoutSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});
const Workout = model('Workout', workoutSchema);
module.exports = Workout;
