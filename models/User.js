const mongoose = require('mongoose');
const {model, Schema} = mongoose

const userModel = new Schema({
    email: String,
    password: String
})

module.exports = model('User', userModel)