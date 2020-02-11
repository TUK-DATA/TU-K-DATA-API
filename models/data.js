const mongoose = require('mongoose');

var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes();

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
        // default: new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds(),
        type: String,
        required: true
    },
    date: {
        // default: new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear(),
        type: String,
        required: false

    },
    location: {
        type: String,
        required: false
    }
    

});

module.exports = mongoose.model('tukData', DataSchema);