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



// const rev = revenueSchema.create({
//     ...body, 
// });

// const sava = body.model.create({
//     revenue: rev._id,
// });

// const get = Poll.find();
// const rev = Reven.findOne({ id: get.revenue })
// return rev