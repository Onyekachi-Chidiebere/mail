const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

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
    to:'thaddydore@gmail.com',
    subject:'Welcome',
    html:'Thanks for subscribing'
}
app.get('/', (req, res)=>{
    res.send('Mail sent')
    transporter.sendMail(mailOption, err =>{
        if(err){
            console.log(err)
        }else{
            console.log('mail sent')
        }
    })
})
app.listen(3003, ()=> console.log('App running on port 3003'))
