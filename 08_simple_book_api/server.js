const express = require('express');
const app = express();
const BookRoute = require('./src/routes/books.routes');
require("dotenv").config()
const PORT = process.env.PORT;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/', BookRoute);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
});