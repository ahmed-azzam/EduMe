const express = require('express');
const router = express.Router();
const Course = require('../../models/Course');
const { response } = require('express');
const { route } = require('./users');

// @route  POST api/courses
// @desc   add course

router.post('/addCourse', async (req, res) => {
  const { title, type, videoUrl, description } = req.body;
  const vId = videoUrl.substr(32, 11);
  var x = 'https://www.youtube.com/embed/' + vId;
  const videoImg = 'https://img.youtube.com/vi/' + vId + '/0.jpg';
  let course = new Course({
    title,
    type,
    videoUrl: x,
    description,
    videoImg,
  });
  try {
    await course.save();
    res.send('Course saved ');
  } catch (error) {
    console.log(error);
    res.status(500).send('Server error');
  }
});

// @route GET All courses /api/courses
router.get('/', async (req, res) => {
  let courses = await Course.find({})
    .then(response => {
      if (response.length == 0) {
        // The error thrown when there is no data in the response
        throw error;
      }
      res.send(response);
    })
    .catch(err => {
      res.status(500).send('Server error');
    });
});

// @route GET courses with same title /api/courses/:title
router.get('/:type', async (req, res) => {
  const { type } = req.params;
  let courses = await Course.find({ type })
    .then(response => {
      if (response.length == 0) {
        // The error thrown when there is no data in the response
        throw error;
      }
      res.send(response);
    })
    .catch(err => {
      res.status(500).send('Server error');
    });
});

module.exports = router;
