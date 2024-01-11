const express = require('express')
 
const router = express.Router()

const { createFeeTax, getFeeTax } = require('../controller/fees')

router.post('/:id', createFeeTax)

router.get('/', getFeeTax)

module.exports = router
