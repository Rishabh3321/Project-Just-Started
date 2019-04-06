const mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'This field is required.'
    },
    userId: {
        type: String,
        required: 'This field is required.'
    },
    password: {
        type: String
    },
    Year: {
        type: String
    }
},{collection:'ABC'});

// Custom validation for email
studentSchema.path('userId').validate((val) => {
    userIdRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return userIdRegex.test(val);
}, 'Invalid userId.');

mongoose.model('Student', studentSchema);
