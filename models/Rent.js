const mongoose = require('mongoose');
const { Schema, model } = mongoose

const RentSchema = new Schema({
    revenue: {
        type: Schema.Types.ObjectId,
        ref: 'Revenue'
    }  
})

module.exports = model('Rents', RentSchema)
