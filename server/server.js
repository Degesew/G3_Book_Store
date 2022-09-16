import express from "express"
import mysql from "mysql"
import createRoute from "./Routes/createRoute.js";
import insertRoute from "./Routes/insertRoute.js";
import deleteRoute from "./Routes/deleteRoute.js";
import updateRoute from "./Routes/updateRoute.js";
// initiate express 
const app = express()

// middleware
app.use('/user',createRoute)
app.use('/user',insertRoute)
app.use('/user',deleteRoute)
app.use('/user',updateRoute)


//  Creating a connection to the database 
let myConnections = mysql.createConnection({
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock", //path to mysql sock in MAMP
    user: "group3",
    password: "maygroup3",
    host: "127.0.0.1",
    database: "G3_Book_Store"
});
 
myConnections.connect((err) => {
    if (err) console.log(err);
    else console.log("Connected");
});

export default myConnections

// server listener
const port = 2022


app.listen(port, ()=>{
    console.log(`listening to ${port}`);
})
