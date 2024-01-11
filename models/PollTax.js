const mongoose = require('mongoose');
const { Schema, model } = mongoose

const polltaxSchema = new Schema({
    revenue: {
        type: Schema.Types.ObjectId,
        ref: 'Revenue'
    }  
})

module.exports = model('PollTax', polltaxSchema)
