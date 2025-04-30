import app from './app.js';
import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config({ path: './config.env' });

const PORT=process.env.PORT|| 5000;

mongoose.connect(process.env.MONGO_URI_2, {  family: 4}

).then(()=>{
    console.log("MongoDB connected");
    app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`));


}).catch(err=>console.error('MongoDB connection failed:' ,err));