const Licence = require('../models/Licence');

const createLicence = async (req, res) => {
    try {
        const newEarn = await Licence.create({
            ...req.body
        })
        const earning = await newEarn.save()
        res.status(201).json(earning)
    } catch (error) {
        res.status(500).json(error.message)
    }
}


const getLicence = async (req, res) => {
    try {
        const earning = await Licence.find()
        res.status(200).json(earning)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = { createLicence, getLicence }