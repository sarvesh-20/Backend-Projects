const { books, authors } = require("../database.js");

const bookscontroller = (req, res) => {
  const allbooksTitle = books.map((book) => book.title);
  return res.json({ data: allbooksTitle });
};
const findAuthors = (req, res) => {
  const authorsName = authors.map((author) => author.name);
  return res.json({ data: authorsName });
};
const findBookofsameGanre = (req, res) => {
  const genreName = req.params.type;
  const genreTYpe = books.filter((book) => book.genre.includes(genreName));
  const sameGenreBooks = genreTYpe.map((book) => book.title);
  return res.json({ data: sameGenreBooks });
};
const findbookbyAuthorName = (req, res) => {
  const authorsname = req.params.authorsname;
  const verifyauthor = authors.filter(
    (author) => author.name === authorsname
  )[0].bookName;
  return res.json({ data: verifyauthor });
};
const findAuthorNameByBookName = (req, res) => {
  const bookname = req.params.bookname;
  const verifybook = authors.filter((books) =>
    books.bookName.includes(bookname)
  );
  const allbooks = verifybook.map((book) => book.name);
  return res.json({ data: allbooks });
};

module.exports = {
  bookscontroller,
  findAuthors,
  findBookofsameGanre,
  findbookbyAuthorName,
  findAuthorNameByBookName
};
