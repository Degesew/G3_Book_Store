import myConnections from "../server.js";
import express from "express"

app.use(express.json()); 
app.use(express.urlencoded( {extended: true }));


let deleteBook = (req, res) => {
    myConnections.query('DELETE from Books', function (err, result) {
          if (err) throw err;
          console.log("1 record deleted");
        });
      
        res.send('Deleted successfully')
      
      }

      export default deleteBook