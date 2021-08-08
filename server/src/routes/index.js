const express = require('express');

const router = express.Router();

// CONTROLLERS
const { login, checkAuth, register } = require('../controllers/auth');

const { getUsers } = require('../controllers/user');

const { getCourses } = require('../controllers/course/course');

const {
  getCourseLevel,
  addCourseLevel,
  deleteCourseLevel,
} = require('../controllers/course/courseLevel');

const { addLesson, getLesson } = require('../controllers/course/lesson');

const {
  getContent,
  addContent,
  getContentLesson,
} = require('../controllers/course/content');

// MIDDLEWARES
const { auth } = require('../middlewares/auth');
// const { uploadFile } = require('../middlewares/uploadFile')

// ROUTER
router.post('/login', login);
router.post('/register', register);
router.get('/check-auth', auth, checkAuth);

router.get('/users', getUsers);

router.get('/courses', getCourses);

router.get('/course-level/:id', getCourseLevel);
router.post('/course-level', addCourseLevel);
router.delete('/course-level/:id', deleteCourseLevel);

router.post('/lesson', addLesson);
router.get('/lesson/:id', getLesson);

router.get('/content/:id', getContent);
router.post('/content', addContent);
router.get('/content-lesson/:id', getContentLesson);

module.exports = router;
