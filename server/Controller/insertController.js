import myConnections from "../server.js";
import express from "express"

app.use(express.json()); 
app.use(express.urlencoded( {extended: true }));

let newBook = (req, res) => {
    console.log(req.body)
    let Auth = req.body.authorName;
    let Title = req.body.bookTitle;
    let Genre = req.body.bookGenre;
    let Year = req.body.publishedYear;
  
    let sqlAddToProducts = 
    `INSERT INTO Books (author_name, book_Title,book_genre,published_year) VALUES ('${Auth}','${Title}','${Genre}','${Year}')`;
    
    myConnections.query(sqlAddToProducts, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  
    res.end('its working')
  
  }

  export default newBook

