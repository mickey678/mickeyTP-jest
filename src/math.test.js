const Util = require('./math');
const interval = require('./interval')

describe('Factorial', function () {
    test.each([
        [0, 1],
        [1, 1],
        [2, 2],
        [3, 6],
        [4, 24],
        [5, 120],
        [6, 720],
    ])(
        'Factorial %i equals to %i',
        (n, expected) => {
            expect(Util.factorial(n)).toBe(expected);
        },
    );
    test('Factorial of negative integers throws exception', () => {
        expect(()=> {Util.factorial(-10)}).toThrow(); 
    });
});


describe('IsPrimerial', function () {
    test.each([
        [0, false],
        [1, false],
        [2, true],
        [3, true],
        [4, false],
        [5, true],
        [6, false],
        [7, true],
        [23, true],
    ])(
        'IsPrime for %i is %p',
        (n, expected) => {
            expect(Util.isPrime(n)).toBe(expected);
        },
    );

});


describe('Sum Primerial', function () {
    test.each([
        [6,10],
        [8, 17],
    ])(
        'IsPrime for %i is %p',
        (n, expected) => {
            expect(Util.sumPrime(n)).toBe(expected);
        },
    );

});




