require("dotenv").config();
const express = require('express');
const cors = require("cors");
const app = express();

const routes = require("./route");

const PORT = process.env.PORT || 3030
app.use(cors());
app.options("*", cors());
app.use(express.json());
app.get('/', async(req, res)=>{
    res.status(200);
    res.send("Welcome to root URL of Server");
});
app.use("/api", routes);
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running,and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);