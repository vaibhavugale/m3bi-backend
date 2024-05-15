const User = require("../models/User")

exports.getUserData = async (req,res) =>{
    try{

        // const data = await User.find({});
        const data = await User.aggregate([
            {
                $group: {
                    _id: "$status", // Grouping by the "status" field
                    count: { $sum: 1 }, // Counting the number of documents in each group
                    users: { $push: "$$ROOT" } // Storing the original documents in each group
                }
            }
        ]);
         

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
        const {userName,ADS,storage,UID,email,status} = req?.body || {}
        const data = await User.create({
            userName,
            email,
            ADS,
            storage,
            UID,
            status
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