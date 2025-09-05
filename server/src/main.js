import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";

dotenv.config();

const app = express();

app.use(express.json());


const start = async () => {
    try{
        await mongoose.connect(process.env.DB_URL)
        console.log('DB CONNECTED')


    app.listen(process.env.PORT || 5000, () => {
        console.log('SERVER UP')
    })
    } catch (err) {
        console.log('ERROD:', err);
    } 
};

start ();
    
   