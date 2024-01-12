const Others = require('../models/Others');
const Revenue = require('../models/Revenue')

const createOtherTax = async (req, res) => {
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


const getOtherTax = async (req, res) => {
    try {
        const others = await Others.find()

        res.status(200).json(others)
    } catch (error) {
        res.status(500).json(error.message)
    }
}
    

module.exports = { createOtherTax, getOtherTax }
