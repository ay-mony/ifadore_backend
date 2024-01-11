const mongoose = require('mongoose');
const { model, Schema } = mongoose

const userModel = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},
    {timestamps: true}
)

module.exports = model('User', userModel)
