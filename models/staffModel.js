const mongoose = require('mongoose')
const Schema = mongoose.Schema

const staffSchema = new Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    Phone: { 
        type: String, 
        required: true, 
        trim: true, 
        min: 5, 
        max: 15 
    },
    Gender: {
        type: String,
        enum: ['M', 'F', 'O']
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true,
    },
    DOB : {
        type : Date
    }
})


module.exports =  staffSchema 