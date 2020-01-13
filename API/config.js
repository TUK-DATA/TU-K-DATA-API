require('dotenv').config();
const env = process.env.Node_env; // 'dev' or 'test'

const dev = {
    db : {
        Url: process.env.DB_CONNECTION
    }
};

const test = {
    db : {
        Url: process.env.DB_CONNECTION // the database for testing 
        // make a database for testing and add it here.
    } 
};

const config = {
    dev,
    test

};

module.exports = config[env]