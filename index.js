// import statement
const express = require("express");
const mongoose = require("mongoose");
const User = require("./schemas/schema");
const app = require("./users/index.js");
const newbooks = require("./book/index.js");

// create instance of express(eneble express)
const server = express();
const port = 1000;
server.use(express.json());

// DB connected
mongoose
  .connect(
    "mongodb+srv://sarveshg2211:sarvesh2211@cluster0.n3cmzet.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() =>
    server.listen(port, () => {
      console.log(`server running on http://localhost:${port}`);
    })
  )
  .catch((err) => console.log(`error is ${err.message}`));

  server.use('/user', app);

  server.use('/books', newbooks)

// const justSave = () => {

// };
