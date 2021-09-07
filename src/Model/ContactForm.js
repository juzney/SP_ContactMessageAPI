const mongoose = require('mongoose');
   
const contactForm = new mongoose.Schema({

    firstName: {
        type: String,
        required:true
    },
    lastName: {
        type: String,
        required:true
    },
    celPhone: {
        type: Number,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    city: {
        type: String,
        required:true
    },
    subject: {
        type: String,
        required:true
    },
    message: {
        type: String,
        required:true
    }
}, { timestamps:true })


const contact = mongoose.model('Contact', contactForm);

module.exports = contact;

