const express = require('express')
 
const router = express.Router()

const { getPollTax, createPollTax } = require('../controller/polltax')

router.post('/', createPollTax)

router.get('/', getPollTax)

module.exports = router
