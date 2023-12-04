const { Schema, model} = require("mongoose");
//const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

// member schema
//const memberSchema = new mongoose.Schema({
  const memberSchema = new Schema({
  username: {
    type: String,
    unique: true,
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
});

// set up pre-save middleware to create password
memberSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
memberSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};


const Member = model('Memeber', memberSchema);
//const Member = mongoose.model("Member", memberSchema);

module.exports = Member;
