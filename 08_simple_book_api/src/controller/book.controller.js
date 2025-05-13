let books = [
    {id: 1, title:"Treasure Island", author: "Robert Louis Stevenson"},
    {id: 2, title:"Pride and Pejudice", author: "Jane Austen"},
    {id: 3, title:"The Scarlet Letter", author: "Nathaniel Hawthorne"}
];

const welcomeMessage = (req, res) => {
    res.send('Simple Book API using Node.js and Express!');
};

const fetchAllBooks = (req, res) => {
    res.json(books);
};

const fetchBook = (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = books.find(book => book.id === bookId);

    if (book) {
        res.json(book);
    } else {
        res.status(404).json({message: 'Book not found'});
    }
};

const addNewBook = (req, res) => {
    const { title, author } = req.body;
    const book = {
        id: books.length + 1,
        title,
        author
    };

    books.push(book);
    res.json(books);  
};

const updateBook = (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = books.find(book => book.id === bookId);
    
    const { title, author } = req.body;
    book.title = title;
    book.author = author;

    if (book) {
        res.json(book);
    } else {
        res.status(404).json({message: 'Book not found'});
    }
};

const deleteBook =  (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = books.find(book => book.id === bookId);

    if (!book) {
        return res.status(404).send('Book not found.');
    } else {
        books = books.filter(book => book.id !== bookId);
        res.json({ message: `The book ${book.title} is deleted.`});
    }
};

module.exports = {
    welcomeMessage,
    fetchAllBooks,
    fetchBook,
    addNewBook,
    updateBook,
    deleteBook
};