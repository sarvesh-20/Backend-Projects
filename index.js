const express = require("express");
const { books, authors} = require("./database.js");
const server = express();
const port = 1000;
server.use(express.json())


// http://localhost:4000/check
server.get("/", (req, res) => {
  res.send("back-end starting");
});

// find all books titles
// url => http://localhost:1000/books
// get request
server.get("/books", (req, res)=>{
   const allbooksTitle = books.map((book)=> book.title);
   return res.json({data : allbooksTitle});
});

// find all authors name 
// url => http://localhost:1000/authors
// get request
server.get("/authors", (req,res)=>{
    const authorsName = authors.map((author)=>author.name);
    return res.json({data : authorsName})
});

// find book name of same genre's
// url => http://localhost:1000/genre/:type
// get request
server.get("/genre/:type",(req, res)=>{
    const genreName = req.params.type;
    const genreTYpe = books.filter((book) => book.genre.includes(genreName));
    const sameGenreBooks = genreTYpe.map((book)=>book.title);
    return res.json({data : sameGenreBooks});
}); 

// find books by authors name 
// get equest
// route => /authors/:authorsname
// url => http://localhost:1000/authors/:authorsname;
server.get("/authors/:authorsname", (req, res)=>{
    const authorsname = req.params.authorsname;
    const verifyauthor = authors.filter((author) => author.name === authorsname)[0].bookName ;
    return res.json({data : verifyauthor });
});

// find author name by bookname
// get reqest
// route => /books/:bookname
// url => http://localhost:1000/books/:bookname
server.get("/books/:bookname", (req, res)=>{
  const bookname = req.params.bookname;
  const verifybook = authors.filter((books)=> books.bookName.includes(bookname));
  const allbooks = verifybook.map((book)=>book.name)
  return res.json({data : allbooks});
})


server.listen(port, (req, res) => {
  console.log(`server running on http://localhost:${port}`);
});
