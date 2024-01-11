const Earnings = require('../models/Earnings');
const Revenue = require('../models/Revenue')

const createRent = async (req, res) => {
    try {
        const newEarn = await Earnings.create({
            ...req.body
        })
        const earning = await newEarn.save()
        res.status(201).json(earning)
    } catch (error) {
        res.status(500).json(error.message)
    }
}


const getRent = async (req, res) => {
    try {
        const earning = await Earnings.find()
        const revenue = Revenue.findOne({
            id: earning._id
        })
        res.status(200).json(revenue)
    } catch (error) {
        res.status(500).json(error.message)
    }
}
    

module.exports = { createRent, getRent }
