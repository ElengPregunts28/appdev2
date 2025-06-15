const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { faker } = require('@faker-js/faker');
require('dotenv').config();

const User = require('../models/user.model');
const Book = require('../models/book.model');

mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Database connected for seeding.');

const seedDb = async () => {
    try {

        await User.deleteMany({});
          console.log('✅ Existing users cleared.');

        await Book.deleteMany({});
            console.log('✅ Existing books cleared.');

        const users = [];

        for (let index = 0; index < 10; index++) {

            const fakePassword = faker.internet.password();
            const hashedPassword = await bcrypt.hash(fakePassword, 10);
            users.push(new User ({
                username: faker.internet.username(),
                email: faker.internet.email(),
                password: hashedPassword,
            }));
        }
        const savedUsers = await User.insertMany(users);
            console.log(`✅ Successfully created and saved ${savedUsers.length} users.`);
            console.log(savedUsers);

        const books = []

        for (let index = 0; index < 10; index++) {

            const randomYear = faker.date.past({ years: 50 }).getFullYear();
            const publicationDate = Math.min(randomYear, new Date().getFullYear());

            books.push(new Book ({
                title: faker.book.title(),
                author: faker.person.fullName(),
                year: publicationDate,
                userId: savedUsers[Math.floor(Math.random() * savedUsers.length)].id
            }))
        }
        await Book.insertMany(books);
            console.log(`✅ Successfully created and saved ${books.length} books.`);
            console.log(books);

        mongoose.connection.close()
    } catch (error) {
        console.error("Error seeding:", error);
        mongoose.connection.close()
    }
}

seedDb()

