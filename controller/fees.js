const Fees = require('../models/Fees');
const Revenue = require('../models/Revenue')

const createFeeTax = async (req, res) => {
    try {
        const newTax = await Fees.create({
            ...req.body
        })
        const tax = await newTax.save()
        res.status(201).json(tax)
    } catch (error) {
        res.status(500).json(error.message)
    }
}


const getFeeTax = async (req, res) => {
    try {
        const fees = await Fees.find()

        res.status(200).json(fees)
    } catch (error) {
        res.status(500).json(error.message)
    }
}
    

module.exports = { createFeeTax, getFeeTax }
