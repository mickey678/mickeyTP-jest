const BookRepository = require('./book.repository');
const db = require('./db')

const repository = new BookRepository(db);

console.log(repository.getCountBookAddedByMont('9s8pz9'))