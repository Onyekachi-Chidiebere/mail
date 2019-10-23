const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const nodemailer = require('nodemailer');

const Register = require('./Model/Schema')
const App = express()


const corsOption = {
    origin: 'http://localhost:3000'
}


App.use(cors(corsOption));
App.use(bodyParser.urlencoded({
    extended: true
}));
App.use(bodyParser.json())
mongoose.connect('mongodb://localhost:27017/Register', {
        useUnifiedTopology: true
    })
    .then(res => console.log("connected"))
    .catch(err => console.error(err))


    App.post('/add-user',(req,res)=>{
        const {Fullname,Phone,Address,Content,Email}= req.body;
    
    Register.create({
        Fullname:Fullname,
        Phone:Phone,
        Address:Address,
        Content:Content,
        Email:Email
        }).then(res=>console.log('saved'))
         .catch(err=>console.error(err))
         const transporter = nodemailer.createTransport({

            service:'Gmail',
            host:'smtp.gmail.com',  
            secure:false,
            auth:{
                user:'docufix49@gmail.com',
                pass:'docufixapp'
            }
        });
         const mailOption ={
             from:'docufix49@gmail.com',
             to:req.body.Email,
             subject:'Welcome',
             html:`Thanks ${Fullname} for Subscribing`}
         
             transporter.sendMail(mailOption, err =>{
             if(err){
                 console.log(err)
             }else{
                 console.log('mail sent')
             }
         })
     })
    //  const {Fullname,Phone,Address,Content,Email}= req.body;

  
   




App.listen(2001, () => {
    console.log('server is running on port 2001')
})