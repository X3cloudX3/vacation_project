const express = require("express")
const bodyParser = require("body-parser")
require("dotenv").config()
const vacations = require("./routes/vacation");
const users = require("./routes/auth")
const db = require("./db/index");
const cors = require("cors");
// const {checkEnvParams} = require("../internal_modules/checkEnvParams");
// checkEnvParams(["PORT","SECRET"])
const app = express()
db.connect(() => {
    console.log("connected to database");
})
// function checkEnvVariables(){
//     const { PORT } = process.env;
//     if(!PORT){
//         console.log('\x1b[33m%s\x1b[0m', "missing env params");  //yellow

//     }
// }
// checkEnvVariables();


app.use(cors())
app.use(bodyParser.json())

app.use("/auth", users)

app.use("/vacation", vacations) //2 entries loaded.. 


app.use((error, req, res, next) => {
    res.send(error)
})

app.listen(process.env.PORT, () => {
    console.log("listening  to: " + process.env.PORT)
})