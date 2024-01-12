const Fees = require('../models/Fees');

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

const getTotalAmount = async (req, res) => {
    try {
        const totalAmount = await PollTax.aggregate([
            {
                $group: {
                    _id: null,
                    totalAmount: { $sum: { $toDouble: '$amount' } }
                }
            }
        ]);

        res.status(200).json({ totalAmount: totalAmount[0].totalAmount || 0 });
    } catch (error) {
        res.status(500).json(error.message);
    }
}
    

module.exports = { createFeeTax, getFeeTax, getTotalAmount }
