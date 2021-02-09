//***************************
// DEPENDENCIES
//***************************
require("dotenv").config()
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

//**************************
// DATABASE CONNECTION
//************************** 
const mongoose = require("./db/connection")

//****************************
// GOLBAL VARIABLES
//*****************************
const {PORT = 4000} = process.env //destructuring env variables
//****************************
// APPLICATION OBJECT
//*****************************

const app = express()

//**************************
// MIDDLEWARE
//************************** 

app.use(cors()) // to prevent cors erros, currently allowing all traffic
app.use(morgan("tiny")) // server logging
app.use(express.json()) // parse json bodies
app.use(express.urlencoded({extended: true})) // parse urlencoded form data bodies

//**************************
// ROUTES AND ROUTERS
//************************** 

app.get("/", (req, res) => {
    res.json({hello: "world"})
})

//****************************
// SERVER LISTENER
//*****************************

app.listen(PORT, () => {
    console.log(`you are listening on port ${PORT}`)
})
