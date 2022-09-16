import myConnections from "../server.js";
import createBooks from "../Schema/schema.js"

let createTable = (req,res)=>{
    let message = "Tables created"
    myConnections.query(createBooks, (err, results, fields) => {
        if (err) console.log(err);
      });
      res.end(message)
}

export default createTable