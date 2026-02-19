const axios = require('axios');
const jsonData = require('../env.json');
const BookController = require('../controllers/BookController');

const bookController = new BookController();

test('get book by id', async () => {
    bookController.findBookById(9812983912839);
    expect(response.status).toEqual(200); 
})