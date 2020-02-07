const express = require('express');
const tukData = require('../models/data');

const router = express.Router();

const id = '5e2023668a825b2b4888fe39';

router.post('/', (req, res) => {
    const data = new tukData({
        temperature: req.body.temperature,
        humidity: req.body.humidity,
        airQuality: req.body.airQuality,
        time: req.body.time
        
        
    });
    tukData.findById({_id: id}, (error, data) => {
        if(error) res.send(error);
        Object.assign(data, req.body).save((error, data) => {
            if(error) res.send(error);
            res.json({ message: 'Realtime Object updated successfully!', data})
        });
    });

});



module.exports = router;