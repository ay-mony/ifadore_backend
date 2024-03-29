const express = require('express');
const { json, urlencoded } = require('express')
const morgan = require('morgan')
const cors = require('cors');
const connectDB = require('./config');
const authRoute  = require('./routes/authRoute')
const polltaxRoute = require('./routes/polltaxRoute')
const feeRoute = require('./routes/feeRoute')
const rentRoute = require('./routes/rentRoute')
const earningRoute = require('./routes/earningRoute')
const othersReoute = require('./routes/othersRoute')
const nonrevenueRoute = require('./routes/nonrevenueRoute')
const licenceRoute = require('./routes/licenceRoute')


const app = express()
app.use(cors())
app.use(json())
app.use(urlencoded({extended: false}))
app.use(morgan('common'))


app.use('/api/auth', authRoute)
app.use('/api/polltax', polltaxRoute)
app.use('/api/fees', feeRoute)
app.use('/api/rent', rentRoute)
app.use('/api/earning', earningRoute)
app.use('/api/others', othersReoute)
app.use('/api/nonrevenue', nonrevenueRoute)
app.use('/api/licence', licenceRoute)

const port = process.env.PORT || 8800
app.listen(port, () => {
    connectDB()
    console.log(`Server started at port ${port}`)
})
