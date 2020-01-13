const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const config = require('config')
require('dotenv').config();
const port = process.env.PORT;

app.use(bodyParser.json());

// Import routes
const getRoute = require('./routes/get');
const postRoute = require('./routes/post');

app.use('/data', getRoute);
app.use('/data', postRoute);

// connect to db
mongoose.connect(config.db.Url ,{ useNewUrlParser: true }, () => {
    console.log(`connected to the database`)
});



// listening to the server
app.listen(port);