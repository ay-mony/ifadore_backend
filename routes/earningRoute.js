const express = require('express')
 
const router = express.Router()

const { createEarning, getEarning, getTotalAmount } = require('../controller/earnings')

router.post('/:id', createEarning)

router.get('/', getEarning)

router.get('/amount', getTotalAmount)

module.exports = router
