const mongoose = require('mongoose');
const { Schema, model } = mongoose

const OthersSchema = new Schema({
    revenue: {
        type: Schema.Types.ObjectId,
        ref: 'Revenue'
    }  
})

module.exports = model('Others', OthersSchema)
