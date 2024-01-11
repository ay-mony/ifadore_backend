const mongoose = require('mongoose');
const {Schema, model } = mongoose

const revenueSchema = new Schema({
    fullName: String,
    phone: String,
    address: String,
    amount: Number,
    date: String,
    taxOfTax: String,
},
    { timestamps: true }
)

module.exports = model('Revenue', revenueSchema)

