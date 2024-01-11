const Rent = require('../models/Rent');
const Revenue = require('../models/Revenue')

const createRent = async (req, res) => {
    try {
        const newRent = await Rent.create({
            ...req.body
        })
        const rent = await newRent.save()
        res.status(201).json(rent)
    } catch (error) {
        res.status(500).json(error.message)
    }
}


const getRent = async (req, res) => {
    try {
        const rent = await Rent.find()
        const revenue = Revenue.findOne({
            id: rent._id
        })
        res.status(200).json(revenue)
    } catch (error) {
        res.status(500).json(error.message)
    }
}
    

module.exports = { createRent, getRent }
