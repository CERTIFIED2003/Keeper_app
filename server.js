// Requiring the packages
require('dotenv').config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

// initializing express 
const app = express();

// routes
const keep = require('./routers/keep');

// connectDB
connectDB();

// cors
app.use(cors({origin:true, credentials:true}));

// initialize middleware
app.use(express.json({extended:false}))

// home route
app.get("/", (req, res) => {
    res.send("server is running.");
})

// use routes 
app.use("/api/keep", keep);





// setting up the port
const PORT = 8000 || process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});