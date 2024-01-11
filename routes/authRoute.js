const express = require('express')

const router = express.Router()

const {Login, Logout, Register} = require('../controller/auth');

router.post('/login', Login)

router.post('/logout', Logout)

router.post('/register', Register)

module.exports = router
