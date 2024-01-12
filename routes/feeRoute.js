const express = require('express')
 
const router = express.Router()

const { createFeeTax, getFeeTax, getTotalAmount } = require('../controller/fees')

router.post('/:id', createFeeTax)

router.get('/', getFeeTax)

router.get('/amount', getTotalAmount)

module.exports = router
