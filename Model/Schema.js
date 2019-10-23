
const mongoose = require('mongoose')
const Details = new mongoose.Schema({
    Fullname:String,
    Phone:String,
    Address:String,
    Content:String,
    Email:String
}, 
{
    timestamps:true
});

const Register = mongoose.model('User',Details)

module.exports = Register;