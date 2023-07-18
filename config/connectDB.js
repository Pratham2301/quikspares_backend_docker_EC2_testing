import dotenv from 'dotenv';
import mongoose from 'mongoose'


dotenv.config();

const DB_URL = process.env.DB_URL;


const connectDB = async() => {
    try {
        await mongoose.connect(DB_URL,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });

        console.log("Database Connected Successfully");

        
    } catch (err) {
        console.log(err);
    }
};

export default connectDB;