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
        const nonrevenue = await NonRevenue.find()

        res.status(200).json(nonrevenue)
    } catch (error) {
        res.status(500).json(error.message)
    }
}
    

module.exports = { createNonRevenue, getNonRevenue }
