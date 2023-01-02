require("dotenv").config();
const mongoose = require("mongoose");

const db = process.env.MONGODB_URI;

const connectDB = async() => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("mongoDB connected.");
    }catch(err){
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;