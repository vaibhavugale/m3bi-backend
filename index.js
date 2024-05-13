const cors = require("cors");
const express = require("express");
const app = express();
const dotenv = require('dotenv');
const database = require("./config/database");
const { getUserData, createUserData } = require("./controller/userData");


app.use(express.json());
app.use(
	cors({
		origin:["https://m3bi.vercel.app","http://localhost:3000","*"],
		credentials:true,
		
	})
)

app.get("/userData",getUserData);
app.post("/create-user", createUserData);
database.connect();
const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log("sever running")
})