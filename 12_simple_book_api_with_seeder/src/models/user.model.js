const mongoose = require("mongoose");

const userSchema = new mongoose.Schema (
    {
        username: {
            type: String,
            required: [true, "Please enter username"],
            trim: true,
            unique: true,
            minlength: 3,
            match: /^[a-zA-Z0-9]+/,
        },
        email: {
            type: String,
            required: [true, "Please enter email"],
            trim: true,
            unique: true,
        },
        password: {
            type: String,
            required: [true, "Please enter a password"],
            trim: true,
            minlength: 6,
        },
    }, 
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;