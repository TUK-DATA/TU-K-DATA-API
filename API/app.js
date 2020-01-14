const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
var env = process.env.NODE_ENV || 'dev';
var config = require('./config')[env];
// config.get('dbUrl');  getting the url for the database

// require('dotenv').config();


const port = process.env.PORT;

app.use(bodyParser.json());

// Import routes
const getRoute = require('./routes/get');
const postRoute = require('./routes/post');

app.use('/data', getRoute);
app.use('/data', postRoute);

// connect to db
mongoose.connect(process.env.DB_CONNECTION ,{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log(`connected to the database`)
});



// listening to the server
app.listen(port);