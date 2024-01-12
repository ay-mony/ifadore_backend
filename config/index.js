'use strict';

require('dotenv').config()

const mongoose = require('mongoose');
const { set, connect } = require('mongoose');

const connectDB = () => {
    set('strictQuery', true)

    connect("mongodb+srv://Suresports:895623147147@cluster0.eimyl.mongodb.net/Therapist?retryWrites=true&w=majoritycls", {
        w: 'majority',
        journal: true, // If you want to wait for the write to be acknowledged by the journal
        wtimeoutMS: 1000,
    })

    mongoose.connection.on('connected', () => {
        console.log('DB Connection sucessful!!')
    })

    mongoose.connection.on('error', (err) => {
        console.error(err.message)
    })

    mongoose.connection.on('disconnected', () => {
        console.log('DB Disconnected!!')
    })
}


module.exports = connectDB
