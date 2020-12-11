const express = require('express');
const mongoose = require('mongoose');
const cors= require('cors');
const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect('mongodb://localhost/paymentDetailsDb').then(() => console.log('Connected To mongodb'))
.catch((err) => console.log('Exception Occured ', err));
const schemaForData=new mongoose.Schema({
    _cardNo:Number,
    _expDate:String,
    _cvcNo:Number,
    _ownerName:String
});

const Data=mongoose.model('Data',schemaForData);



app.put('/',(req,res)=>{
        const ele= new Data(
            {
                _cardNo:req.body.cardNo,
                _expDate:req.body.expDate,
                _cvcNo:req.body.cvcNo,
                _ownerName:req.body.ownerName
            }
        );
        ele.save();
        console.log("response saved");
});


app.listen(5000,()=>console.log("listening..."))
