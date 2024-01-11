const mongoose = require('mongoose');
const { Schema, model } = mongoose

const EarningSchema = new Schema({
    revenue: {
        type: Schema.Types.ObjectId,
        ref: 'Revenue'
    }  
})

module.exports = model('Earnings', EarningSchema)
