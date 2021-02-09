//**************************
// DEPENDENCIES
//**************************
require("dotenv").config()
const mongoose = require("mongoose")

//**************************
// GLOBAL VARIABLE
//************************** 
const {MONGODBURI = "mongodb://localhost:27017/database"} = process.env
const config = {useUnifiedTopology: true, useNewUrlParser: true }
const DB = mongoose.connection

//**************************
// ESTABLISH CONNECTION
//************************** 

mongoose.connect(MONGODBURI, config)

//**************************
// HANDLE DB EVENTS
//************************** 
DB.on("open", () => console.log("You are now connected to mongo"))
.on("close", () => console.log("the mongo connection is closed"))
.on("error", (err) => console.log("ERROR: ",err))

//**************************
// EXPORT CONNECTED MONGOOSE OBJECT
//************************** 
module.exports = mongoose

