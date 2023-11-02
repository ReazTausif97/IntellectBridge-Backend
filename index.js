const express = require("express");
const app = express();
const port = 3000;
const expSession = require("express-session");
require("./database");
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
