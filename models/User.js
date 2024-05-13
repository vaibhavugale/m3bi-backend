const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    
    userName:{
    type:String
   },
   email:{
    type:String
   },
   ADS:{
    type:String
   },
   storage:{
    type:String
   },
   UID:{
    type:String
   }
   
});


module.exports = mongoose.model('User1',userSchema);