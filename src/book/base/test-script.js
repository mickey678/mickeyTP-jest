const BookRepository = require('./book.repository');
const db = require('./db')

const repository = new BookRepository(db);

console.log(repository.getBookByName('9s8pz9'))