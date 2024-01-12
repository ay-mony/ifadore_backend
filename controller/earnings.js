const Earnings = require('../models/Earnings');

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
    

module.exports = { createEarning, getEarning, getTotalAmount }
