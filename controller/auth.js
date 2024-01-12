const User = require('../models/User')

const Login = async (req, res) => {

    const {  email, password } = req.body

    try {
        const user = await User.findOne({
            email,
            password
        })

        if(user?.email !== 'ayjones@gmail.com' && user?.password !== 'ayodele123123'){
            res.status(401).json('Incorrect username and pasoword')
        } else {
            res.status(200).json('Login success!!')
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const Register = async (req, res) => {

    try {
        const user = await User.create({
            ...req.body
        })
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).json(error.message)
    }
}


const Logout = async (req, res) => {
    try {
        res.clearCookie('token', {
            sameSite: 'none',
            secure: true
        }).status(200).send({
            message: 'Logged out!!'
        })
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = { Login, Logout, Register }
