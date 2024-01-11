const NonRevenue = require('../models/NonRevenue');
const Revenue = require('../models/Revenue')

const createNonRevenue = async (req, res) => {
    try {
        const newNonRevenue = await NonRevenue.create({
            ...req.body
        })
        const nonrevenue = await newNonRevenue.save()
        res.status(201).json(nonrevenue )
    } catch (error) {
        res.status(500).json(error.message)
    }
}


const getNonRevenue = async (req, res) => {
    try {
        const others = await NonRevenue.find()
        const revenue = Revenue.findOne({
            id: others._id
        })
        res.status(200).json(revenue)
    } catch (error) {
        res.status(500).json(error.message)
    }
}
    

module.exports = { createNonRevenue, getNonRevenue }