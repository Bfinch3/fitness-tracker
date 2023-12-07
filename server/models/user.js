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
  workouts:[{
    type: String,
    unique: false,
    trim:true,
  }], //[{ type: mongoose.Schema.Types.ObjectId, ref: 'Workout' }],

  comments:[{
    type: String,
    unique: false,
    trim: true,
  }], //[{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
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
