const express = require('express');
const router = express.Router();
const  {
    welcomeMessage,
    fetchAllBooks,
    fetchBook,
    addNewBook,
    updateBook,
    deleteBook
} = require('../controllers/book.controller');
const sendBookConfirmationEmail = require('../middlewares/send-email.middleware');

router.get('/', welcomeMessage);

router.get('/all', fetchAllBooks);

router.get('/:id', fetchBook);
   
router.post('/', addNewBook);

router.patch('/:id', updateBook);

router.delete('/:id', deleteBook);

module.exports = router;