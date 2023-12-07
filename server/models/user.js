const {Schema , model } = require("mongoose");
const bcrypt = require('bcrypt');
const dateFormat = require("../utils/dateFormat"); 
// user schema
const userSchema = new Schema(
  {
  name: {
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
  workouts:[
    {
     //[{ type: mongoose.Schema.Types.ObjectId, ref: 'Workout' }],
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
      createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
  }
],
 url: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],

  comments:[
    {
        commentId: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
      },
        commentBody: {
        type: String,
        required: true,
        maxlength: 280,
      },
    }
  ], //[{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
  
  friends: [{
    type: String,
    unique: false,
    trim: true,
  }],
});
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// virtual friendCount
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});
const User = model('User', userSchema);

module.exports = User;
