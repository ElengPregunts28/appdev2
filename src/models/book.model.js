const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema (
    {
        title: {
            type: String,
            required: [true, "Please enter book title"],
            trim: true,
        },
        author: {
            type: String,
            required: [true, "Please enter book title"],
            trim: true,
        },
        year: {
            type: Number,
            required: [true, "Please enter the publication year"],
            trim: true,
            min: 1000,
            max: new Date().getFullYear(),
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
    },
    { timestamps: true }
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;