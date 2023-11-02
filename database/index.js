const mongoose = require("mongoose");
mongoose
  .connect("mongodb://0.0.0.0:27017/IntellectBridge")
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));
