const express = require('express');
const { json, urlencoded } = require('express')
const morgan = require('morgan')
const cors = require('cors');
const connectDB = require('./config');
const authRoute  = require('./routes/authRoute')
const polltaxRoute = require('./routes/polltaxRoute')


const app = express()
app.use(cors())
app.use(json())
app.use(urlencoded({extended: false}))
app.use(morgan('common'))


app.use('/api/auth', authRoute)
app.use('/api/polltax', polltaxRoute)

const port = process.env.PORT || 8800
app.listen(port, () => {
    connectDB()
    console.log(`Server started at port ${port}`)
})
