const PollTax = require('../models/PollTax');
const Revenue = require('../models/Revenue')

const createPollTax = async (req, res) => {
    try {
        const newTax = await PollTax.create({
            ...req.body
        })
        const tax = await newTax.save()
        res.status(201).json(tax)
    } catch (error) {
        res.status(500).json(error.message)
    }
}


const getPollTax = async (req, res) => {
    try {
        const tax = await PollTax.find()
        res.status(200).json(tax)
    } catch (error) {
        res.status(500).json(error.message)
    }
}
    

module.exports = { createPollTax, getPollTax }
