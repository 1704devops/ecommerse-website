require("./db/db_conn");
require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const categoriesRoute = require("./routes/categories");
const ordersRoute = require("./routes/orders");
const productsRoute = require("./routes/products");
const usersRoute = require("./routes/users");

const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// listen for request
app.listen(port, () => {
  console.log(`server listening on ${port}`);
});

// routes
app.use(categoriesRoute);
app.use(ordersRoute);
app.use(productsRoute);
app.use(usersRoute);
