const express = require('express')
 
const router = express.Router()

const { createLicence, getLicence } = require('../controller/licence')

router.post('/', createLicence)

router.get('/', getLicence)

module.exports = router
