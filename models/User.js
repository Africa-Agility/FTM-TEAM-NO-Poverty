const mongoose = require('mongoose');
const { isEmail } = require('validator');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type: String,
        required: [true, 'Please enter your full name']
    },
    email:{
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Enter a valid email']
    },
    password:{
        type: String,
        required: [true, 'Please enter your password'],
        minlength: [6, 'Minimum password length is six characters'],
    },
    
});

const User = mongoose.model('user', userSchema);

module.exports = User;