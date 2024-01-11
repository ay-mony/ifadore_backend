const express = require('express')
 
const router = express.Router()

const { createEarning, getEarning } = require('../controller/earnings')

router.post('/:id', createEarning)

router.get('/', getEarning)

module.exports = router
