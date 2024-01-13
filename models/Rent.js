const mongoose = require('mongoose');
const { Schema, model } = mongoose

const RentSchema = new Schema({
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
    typeOfTax:  {
        type: String
    },
},
    { timestamps: true } 
)

module.exports = model('Rents', RentSchema)
