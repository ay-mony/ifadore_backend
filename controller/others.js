const Others = require('../models/Others');
const Revenue = require('../models/Revenue')

const createRent = async (req, res) => {
    try {
        const newOtherTax = await Others.create({
            ...req.body
        })
        const others = await newOtherTax.save()
        res.status(201).json(others)
    } catch (error) {
        res.status(500).json(error.message)
    }
}


const getRent = async (req, res) => {
    try {
        const others = await Others.find()
        const revenue = Revenue.findOne({
            id: others._id
        })
        res.status(200).json(revenue)
    } catch (error) {
        res.status(500).json(error.message)
    }
}
    

module.exports = { createRent, getRent }
