const mongoose = require('mongoose');
const {Schema, model } = mongoose

const NonRevenueSchema = new Schema({
    revenue: {
        type: Schema.Types.ObjectId,
        ref: 'Revenue'
    }  
})

module.export = model('NonRevenue', NonRevenueSchema)
