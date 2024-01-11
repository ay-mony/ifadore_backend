const mongoose = require('mongoose');
const {Schema, model } = mongoose

const FeeSchema = new Schema({
    revenue: {
        type: Schema.Types.ObjectId,
        ref: 'Revenue'
    }  
})

module.exports = model('Fees', FeeSchema)
