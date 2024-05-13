const User = require("../models/User")

exports.getUserData = async (req,res) =>{
    try{

        const data = await User.find({});
         

        return res.status(200).json({
            data:data
        })
        

    }catch(err){
        return res.status(500).json({
            message:"Internal server Error"
        })
    }
}

exports.createUserData = async (req,res) =>{
    try{
        const {userName,ADS,storage,UID,email} = req?.body || {}
        const data = await User.create({
            userName,
            email,
            ADS,
            storage,
            UID
        })
         

        return res.status(200).json({
            data:data
        })
        

    }catch(err){
        console.log(err)
        return res.status(500).json({
            message:"Internal server Error"
        })
    }
}