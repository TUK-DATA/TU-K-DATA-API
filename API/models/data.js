const mongoose = require('mongoose');


const DataSchema = mongoose.Schema({
    temperature: {
        type: Number,
        required: false
    },
    humidity: {
        type: Number,
        required: false
    },
    airQuality: {
        type: String,
        required: false,
    },
    time: {
        type: Date,
        default: Date.now,
        required: true
    },
    location: {
        type: String,
        required: false
    }
    

}, {
    timestamps: true
});

module.exports = mongoose.model('tukData', DataSchema);