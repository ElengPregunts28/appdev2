const express = require('express');
const mongoose = require("mongoose");
const app = express();
const BookRoute = require('./src/routes/book.route');
require("dotenv").config()

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/', BookRoute);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
});

mongoose
    .connect(MONGO_URL)
    .then(() => {
        console.log("Connection created!");
    })
    .catch((error) => {
        console.log(error.message);
    });