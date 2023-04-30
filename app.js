const express = require('express');
const morgan = require('morgan');
const ejs = require('ejs');
const mongoose = require('mongoose');
const studentRoute = require('./routes/studentRoute');

// creating a server
const app = express();

// connect to mongodb
const dbURI = 'mongodb://localhost:27017/UG_Students';
async function connect() {
    try {
        await mongoose.connect(dbURI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(error);
    }
}

connect();

// middlewares
app.use(morgan('dev'));
app.set('view engine', 'ejs');
app.use(express.static('public'));

// setting port number
const PORT = process.env.PORT || 3000;

// server listening on port
app.listen(PORT, (req, res) => {
    console.log(`Server started on Port ${PORT}`);
});

// middleware for the post request
app.use(express.urlencoded({ extended : true }));

// Route to various page
app.use(studentRoute);

// 404 page - middleware
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});