const mongoose = require('mongoose');
const { Schema, model } = mongoose

const LicenceSchema = new Schema({
    revenue: {
        type: Schema.Types.ObjectId,
        ref: 'Revenue'
    }  
})

module.exports = model('Licence', LicenceSchema)


//08082699774