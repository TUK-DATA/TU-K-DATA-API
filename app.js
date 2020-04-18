//const config = require('config') // importing the config files
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config()
const port = process.env.PORT;

app.use(bodyParser.json());

// To allow cross-domain ajax calls
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};


// Import routes
const getRoute = require('./routes/get');
const postRoute = require('./routes/post');
const getRealtimeRoute = require('./routes/getRealtimeRoute');
const postRealtimeRoute = require('./routes/postRealtimeRoute');

app.use(allowCrossDomain);

app.use('/data', getRoute);
app.use(`/data/${process.env.API_KEY}`, postRoute);
app.use('/data/real-time', getRealtimeRoute);
app.use(`/data/real-time/${process.env.API_KEY}`, postRealtimeRoute);
app.get('/', (req, res) => res.json({
    message: "Welcome to The TU-K Data API. To get started go to the /data route to see all the data that is available!"
}));

// connect to db
mongoose.connect(process.env.DB_CONNECTION ,{ useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log(`connected to the database`)
});



// listening to the server
app.listen(port, () => console.log(`listening to port ${port}`));
module.exports = app;