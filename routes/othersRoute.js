const express = require('express')
 
const router = express.Router()

const { createOtherTax, getOtherTax } = require('../controller/others')

router.post('/:id', createOtherTax)

router.get('/', getOtherTax)

module.exports = router
