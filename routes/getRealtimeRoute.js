const express = require('express');
const tukData = require('../models/data');

const id = '5e2023668a825b2b4888fe39';


const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const savedData = await tukData.findById(id);
        res.json(savedData);
    } catch (error) {
        res.json({message: error})
    }
});

module.exports = router;