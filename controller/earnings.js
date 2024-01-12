const Earnings = require('../models/Earnings');
const Revenue = require('../models/Revenue')

const createEarning = async (req, res) => {
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


const getEarning = async (req, res) => {
    try {
        const earning = await Earnings.find()
        res.status(200).json(earning)
    } catch (error) {
        res.status(500).json(error.message)
    }
}
    

module.exports = { createEarning, getEarning }
