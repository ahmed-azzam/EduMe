const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  fName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  type: { type: String, required: true },
  gitUser: { type: String },
});
// Is gitUser required
// avatar: { type: String },

module.exports = mongoose.model('Users', UserSchema);
