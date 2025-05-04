const mongoose = require('mongoose')
const userSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique :true
    },
    mobile: {
        type: Number,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['customer', 'admin', 'hotelOwner'],
        default: 'customer'
      },
})
const User = mongoose.model('User',userSchema)
module.exports=User

