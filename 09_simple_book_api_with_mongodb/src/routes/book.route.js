const express = require('express');
const router = express.Router();
const  {
    welcomeMessage,
    fetchAllBooks,
    fetchBook,
    addNewBook,
    updateBook,
    deleteBook
} = require('../controller/book.controller')

router.get('/', welcomeMessage);

router.get('/api/books', fetchAllBooks);

router.get('/api/books/:id', fetchBook);
   
router.post('/api/books', addNewBook);

router.patch('/api/books/:id', updateBook);

router.delete('/api/books/:id', deleteBook);

module.exports = router;