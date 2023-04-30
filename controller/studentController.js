const studentInfo = require('../model/studentsInfo');

// ALL STUDENTS
const home_page = (req, res) => {
    // res.render('main/students', { title: 'All Student' });
    studentInfo.find().sort({ createdAt: 1})
    .then((result) => {
        res.render('main/students', { title: 'All Student', students: result });
    })
    . catch((err) => {
        console.log(err);
    })
};

// SEARCH FOR STUDENT
const search_student = (req, res) => {
    res.render('main/search', { title: 'Search Student' });
};

// POST SEARCH FOR STUDENT 
const search_student_post = (req, res) => {
    studentInfo.findOne({studentID: req.body.studentID})
    .then((result) => {
        if(!result) {
            res.render('main/detail', { title: 'Student Details', students: result });
            console.log('There is no such Student ID in the database');
        } else {
            console.log(result);
            // res.send(result);
            res.render('main/detail', { title: 'Student Details', students: result });
        }
    })
    .catch((err) => {
        console.log(err);
    });

};

// GET - ADDING NEW STUDENT
const register_get = (req, res) => {
    res.render('main/register', { title: 'Add Student' });
};

// POST - ADDING NEW STUDENT
const register_post = (req, res) => {
    const SI = new studentInfo(req.body);

    SI.save()
    .then((result) => {
        // res.render('main/register', { title: 'Register Student' });
        res.redirect('/');
    })
    .catch((err) => {
        res.render('404', { title: 'Page not found'});
    });
}

module.exports = {
    home_page,
    search_student,
    search_student_post,
    register_get,
    register_post
};