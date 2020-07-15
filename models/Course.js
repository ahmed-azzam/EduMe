const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  type: { type: String, required: true },
  videoUrl: { type: String, required: true },
  description: { type: String, required: true },
  videoImg: { type: String, required: true },
});

module.exports = mongoose.model('Courses', CourseSchema);
