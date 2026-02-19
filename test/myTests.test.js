const axios = require('axios');
const jsonData = require('../env.json');
const BookController = require('../controllers/BookController');

const bookController = new BookController();

test('get book by id', async () => {
    await bookController.findBookById(9812983912839);
    console.log('Book found successfully');
})