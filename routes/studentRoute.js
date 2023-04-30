const express = require('express');
const router = express.Router();
const studentController = require('../controller/studentController');

// ALL STUDENTS
router.get('/', studentController.home_page);

// SEARCH STUDENT
router.get('/search', studentController.search_student);

// POST - SEARCH STUDENT
router.post('/search', studentController.search_student_post);

// GET - ADD NEW STUDENT
router.get('/register', studentController.register_get);

// POST - ADD NEW STUDENT
router.post('/register', studentController.register_post);

module.exports = router;