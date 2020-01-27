//const config = require('config') // importing the config files
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config()
const port = process.env.PORT;
const database_connect = process.env.DB_CONNECTION

app.use(bodyParser.json());

// Import routes
const getRoute = require('./routes/get');
const postRoute = require('./routes/post');
const getRealtimeRoute = require('./routes/getRealtimeRoute');
const postRealtimeRoute = require('./routes/postRealtimeRoute');

app.use('/data', getRoute);
app.use('/data', postRoute);
app.use('/data/real-time', getRealtimeRoute);
app.use('/data/real-time', postRealtimeRoute);
app.get('/', (req, res) => res.json({
    message: "Welcome to The TU-K Data API. To get started go to the /data route to see all the data that is available!"
}));

// connect to db
mongoose.connect(database_connect ,{ useNewUrlParser: true}, () => {
    console.log(`connected to the database`)
});



// listening to the server
app.listen(port, () => console.log(`listening to port ${port}`));
module.exports = app;