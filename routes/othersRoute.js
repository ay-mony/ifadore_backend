const express = require('express')
 
const router = express.Router()

const { createOtherTax, getOtherTax } = require('../controller/others')

router.post('/', createOtherTax)

router.get('/', getOtherTax)

module.exports = router
