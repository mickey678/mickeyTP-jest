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
            value:jest.fn(),
            map:jest.fn(),
            sum:jest.fn(),

        };

        dbMock.get.mockReturnValue(dbMock);
        dbMock.map.mockReturnValue(dbMock);
        dbMock.sum.mockReturnValue(dbMock);
        dbMock.value.mockReturnValue(222);

        const repository = new BookRepository(dbMock);
       expect(repository.getTotalPrice()).toBe(222);
    });
});







describe('Book repository Get a book name', function () {
    test('Get a book', () => {

        const dbMock = {
            get:jest.fn(),
            find:jest.fn(),
            value:jest.fn(),

        };

        dbMock.get.mockReturnValue(dbMock);
        dbMock.find.mockReturnValue(dbMock);
        dbMock.value.mockReturnValue(222);

        const repository = new BookRepository(dbMock);
       expect(repository.getBookByName('d')).toBe(222);
    });
});


describe('Book repository getCountBookAddedByMont', function () {
    test('getCountBookAddedByMont', () => {

        const dbMock = {
            get:jest.fn(),
            find:jest.fn(),
            value:jest.fn(),
            map:jest.fn(),
            count:jest.fn(),
            size:jest.fn(),
            filter:jest.fn()

        };

        dbMock.get.mockReturnValue(dbMock);
        dbMock.find.mockReturnValue(dbMock);
        dbMock.map.mockReturnValue(dbMock);
        dbMock.count.mockReturnValue(dbMock);
        dbMock.size.mockReturnValue(dbMock);
        dbMock.filter.mockReturnValue(dbMock);
        dbMock.value.mockReturnValue(222);

        const repository = new BookRepository(dbMock);
       expect(repository.getCountBookAddedByMont('d')).toBe(222);
    });
});





