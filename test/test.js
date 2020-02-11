
// During the test, the env variable is set to test
// process.env.NODE_ENV = 'test'

const mongoose = require('mongoose');
const Data = require('../models/data');

// require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
let should = chai.should();


chai.use(chaiHttp);
// the parent block
// describe('Data', () => {
//     beforeEach((done) => { // Before each test, empty the database
//         Data.remove({}, (err) => {
//             done();
            
//         });
//     });
describe('/GET data', () => {
    it('it should get all the data', (done) => {
        chai.request(server)
            .get('/data')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                // res.body.should.be.eql(0); 
            done();
            
        });
    });
});

// Test the /POST route
describe('/POST data', () => {
    it('it should not post data without some fields', (done) => {
        let data = {
            temperature: 41,
            humidity: 100,
            airQuality: 'Testing value. IGNORE THIS!!',
            time: new Date()
        }
            chai.request(server)
                .post('/data/jj0qlj6x09j')
                .send(data)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.a('object');
                    res.body.should.have.property('temperature');
                    res.body.should.have.property('humidity');
                    res.body.should.have.property('airQuality');
                    res.body.should.have.property('time');
                    // res.body.should.have.property('message').eql('The data has been added successfully!');
                done();

            });
        });
    });

// });