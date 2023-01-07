require("dotenv").config();
const mongoose = require("mongoose");
const db_url = process.env.DB_URL;
mongoose
  .connect(
    db_url,
    { useNewUrlParser: true },
    { useUnifiedTopology: true },
    { useCreateIndex: true },
    { useFindAndModify: false }
  )
  .then(() => {
    console.log("connected to database");
  })
  .catch(() => {
    console.log("error connecting to database");
  });
