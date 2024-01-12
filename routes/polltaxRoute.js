const express = require('express')
 
const router = express.Router()

const { getPollTax, createPollTax, getTotalAmount } = require('../controller/polltax')

router.post('/', createPollTax)

router.get('/', getPollTax)

router.get('/amount', getTotalAmount)

module.exports = router
