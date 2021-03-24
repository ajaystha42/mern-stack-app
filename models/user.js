const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type:String,
        requred:true
    }
})



module.exports = mongoose.model('User',userSchema)