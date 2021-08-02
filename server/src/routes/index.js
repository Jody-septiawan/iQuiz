const express = require("express");

const router = express.Router();

// CONTROLLERS
const { login, checkAuth, register } = require("../controllers/auth");
const { getUsers } = require("../controllers/user");
const { getCourses } = require("../controllers/course/course");
const { getCourseLevel } = require("../controllers/course/courseLevel");

// MIDDLEWARES
const { auth } = require("../middlewares/auth");
// const { uploadFile } = require('../middlewares/uploadFile')

// ROUTER
router.post("/login", login);
router.post("/register", register);
router.get("/check-auth", auth, checkAuth);

router.get("/users", getUsers);

router.get("/courses", getCourses);

router.get("/course-level/:id", getCourseLevel);

module.exports = router;
