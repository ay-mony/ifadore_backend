const express = require('express')
 
const router = express.Router()

const { createNonRevenue, getNonRevenue } = require('../controller/nonrevenue')

router.post('/', createNonRevenue)

router.get('/', getNonRevenue)

module.exports = router
