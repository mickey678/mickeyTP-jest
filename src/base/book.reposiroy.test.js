const BookRepository = require('./book.repository');

describe('Book repository Save', function () {
    test('Save a book', () => {

        const dbMock = {
            get : jest.fn(),
            push : jest.fn(),
            write : jest.fn()
        };

        dbMock.get.mockReturnValue(dbMock);
        dbMock.push.mockReturnValue(dbMock);
        const repository = new BookRepository(dbMock);
        repository.save({id: 1, name: "Unit test"});
        expect(dbMock.write.mock.calls.length).toBe(1);
    });
});



describe('Book repository Total', function () {
    test('Total book', () => {

        const dbMock = {
            size : jest.fn(),
            get:jest.fn(),
            value:jest.fn()
        };

        dbMock.get.mockReturnValue(dbMock);
        dbMock.size.mockReturnValue(dbMock);
        dbMock.value.mockReturnValue(90000);
        const repository = new BookRepository(dbMock);
       expect(repository.getTotalCount()).toBe(90000);
    });
});




describe('Book repository Get Price Total', function () {
    test('Price Total book', () => {

        const dbMock = {
            get:jest.fn(),
            filter:jest.fn(),
            map:jest.fn(),

        };

        dbMock.get.mockReturnValue(dbMock);
        dbMock.map.mockReturnValue(dbMock);
        dbMock.value.mockReturnValue(dbMock);

        const repository = new BookRepository(dbMock);
       expect(repository.getTotalPrice()).toBe(222);
    });
});




