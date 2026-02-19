const axios = require('axios')


module.exports = class BookController {
    async findBookById(bookId) {
        const response = await axios.get('https://demoqa.com/books', { params: { search: bookId } })
        expect(response.status).toEqual(200);
    }
}