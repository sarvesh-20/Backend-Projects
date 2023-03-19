const express = require("express");
const {
  bookscontroller,
  findAuthors,
  findBookofsameGanre,
  findbookbyAuthorName,
  findAuthorNameByBookName,
} = require("../controllers/bookcontrollers");

const app = express.Router();

// http://localhost:4000/check
app.get("/", (req, res) => {
  res.send("back-end starting");
});

// find all books titles
// url => http://localhost:1000/books
// get request
app.get("/booksss", bookscontroller);

// find all authors name
// url => http://localhost:1000/authors
// get request
app.get("/authors", findAuthors);

// find book name of same genre's
// url => http://localhost:1000/genre/:type
// get request
app.get("/genre/:type", findBookofsameGanre);

// find books by authors name
// get equest
// route => /authors/:authorsname
// url => http://localhost:1000/authors/:authorsname;
app.get("/authors/:authorsname", findbookbyAuthorName);

// find author name by bookname
// get reqest
// route => /books/:bookname
// url => http://localhost:1000/books/:bookname
app.get("/books/:bookname", findAuthorNameByBookName);
module.exports = app;
