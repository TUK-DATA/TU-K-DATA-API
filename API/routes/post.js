const express = require('express');
const tukData = require('../models/data');

const router = express.Router();

router.post('/', (req, res) => {
    
    const data = new tukData({
        temperature: req.body.temperature,
        humidity: req.body.humidity,
        airQuality: req.body.airQuality,
        location: req.body.location,       
        
    });

    data.save()
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.json({ message: error})
        });
});



module.exports = router;