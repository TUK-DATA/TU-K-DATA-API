require('dotenv').config();
const env = process.env.Node_env; // 'dev' or 'test'

var config = {
dev: {
    database: {
        url: "mongodb+srv://kibuikaCodes:thetukdataproject.@chasmo-data-mex88.mongodb.net/test?retryWrites=true&w=majority"
    }
},
test: {
    database: {
        url: "mongodb+srv://kibuikaCodes:thetukdataproject.@chasmo-data-mex88.mongodb.net/test?retryWrites=true&w=majority"
    }
}
};

module.exports = config;

// const dev = {
//     db : {
//         Url: "mongodb+srv://kibuikaCodes:thetukdataproject.@chasmo-data-mex88.mongodb.net/test?retryWrites=true&w=majority"
//     }
// };

// const test = {
//     db : {
//         Url: process.env.DB_CONNECTION // the database for testing 
//         // make a database for testing and add it here.
//     } 
// };

// const config = {
//     dev,
//     test

// };

// module.exports = config[env]