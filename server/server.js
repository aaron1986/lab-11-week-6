const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
const PORT = 8080;

app.get("/", (_, response) => {
    response.json("Testing, Testing, one, two, three");
  });

  //always include this
  app.listen(PORT, () => console.log(`App is running on port ${PORT}`));