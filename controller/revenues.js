const PollTax = require('../models/PollTax');
const Revenue = require('../models/Revenue')

const createPollTax = async (req, res) => {
    try {
        const tax = await PollTax.create({
            ...req.body
        })
        await tax.save()
        res.status(201).json('PollTax submitted!')
    } catch (error) {
        res.status(500).json(error.message)
    }
}


const getPollTax = async (req, res) => {
    try {
        const tax = await PollTax.find()
        const revenue = Revenue.findOne({
            id: tax._id
        })
        res.status(200).json(revenue)
    } catch (error) {
        res.status(500).json(error.message)
    }
}
    

module.exports = { createPollTax, getPollTax }
