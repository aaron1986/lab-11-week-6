const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
const PORT = 8080;


const mongoose = require("mongoose");
const Book = require("./models/book");
//mongoose.connect(process.env.DATABASE_URL);

app.get("/", (_, response) => {
    response.json("Testing, Testing, one, two, three");
  });

app.get("/books", async (request, repsonse) => {
    const books = await Book.find(request.query);
    repsonse.json(books);
})

  //always include this
  app.listen(PORT, () => console.log(`App is running on port ${PORT}`));