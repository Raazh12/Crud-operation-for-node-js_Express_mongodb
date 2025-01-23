const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Name is required
  },
  email: {
    type: String,
    required: true,
    unique: true, // Email must be unique
    lowercase: true, // Convert email to lowercase
    trim: true, // Remove whitespace
  },
  password: {
    type: String,
    required: true,
    minlength: 6, // Minimum password length
  },
}, {
  timestamps: true, // Automatically add createdAt and updatedAt fields
});

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;