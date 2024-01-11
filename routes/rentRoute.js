const express = require('express')
 
const router = express.Router()

const { createRent, getRent } = require('../controller/rent')

router.post('/:id', createRent)

router.get('/', getRent)


module.exports = router