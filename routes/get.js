const express = require('express');
const tukData = require('../models/data');


const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const savedData = await tukData.find();
        res.json(savedData);
    } catch (error) {
        res.json({message: error})
    }
});

module.exports = router;