const mongoose = require('mongoose');
const { Schema, model } = mongoose

const EarningSchema = new Schema({
    fullName: {
        type: String
    },
    phone:  {
        type: String
    },
    address:  {
        type: String
    },
    amount:  {
        type: String
    },
    date:  {
        type: String
    },
    taxOfTax:  {
        type: String
    },
},
    { timestamps: true }  
)

module.exports = model('Earnings', EarningSchema)
