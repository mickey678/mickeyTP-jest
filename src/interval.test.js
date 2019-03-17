var interval = require('./interval')

describe('Overlaps ', function () {
    test.each([
        [10,20,9,19,true],
        [10,20,11,21,true],
        [10,20,10,20,true],
        [10,20,21,30,false],
        [10,20,-21,-30,false],
        [-10,-20,21,30,false],
        [-10,20,21,30,false],
        [10,-20,21,30,false],
        [-10,20,19,30,true],
        [0,20,-10,30,true],
        [0,20,-10,30,true],
        [-20,0,-30,-10,true],
        [-20,0,-30,-19,true],
        [-20,0,-30,-21,false],
        [-20,0,-30,-19,true],
    ])(
        'Overlaps for %p is %p is %p is %p',
        (n,n1,k,k1, expected) => {
            expect(new interval(n,n1).overlaps(new interval(k,k1))).toBe(expected);
        },
    );
 
});

describe('Includes ', function () {
    test.each([
        [10,20,9,19,false],
        [10,20,11,21,false],
        [10,20,10,20,false],
        [10,20,21,30,false],
        [10,20,-21,-30,false],
        [-10,-20,21,30,false],
        [-10,20,21,30,false],
        [-20,10,21,30,false],
        [-10,20,19,30,false],
        [0,20,-10,30,false],
        [0,20,-10,30,false],
        [-20,0,-15,-10,true],
        [-20,0,-30,-19,false],
        [-20,0,-30,-21,false],
        [-20,0,-19,-1,true],
    ])(
        'Includes for %p is %p is %p is %p',
        (n,n1,k,k1, expected) => {
            expect(new interval(n,n1).includes(new interval(k,k1))).toBe(expected);
        },
    );
 
});








describe('Union ', function () {
    test.each([
        [10,20,11,19,[10,11,19,20]],
        [10,20,11,21,[10,11,20,21]],
        [10,20,10,20,[10,20]],
        [10,20,21,30,[10,20,21,30]],
        [10,20,-21,-30,[-30,-21,10,20]],
        [-10,-20,21,30,[-20,-10,21,30]],
        [-10,20,21,30,[-10,20,21,30]],
        [-20,10,21,30,[-20,10,21,30]],
        [-10,20,19,30,[-10,19,20,30]],
        [0,20,-10,30,[-10,0,20,30]],
        [0,20,-10,30,[-10,0,20,30]],
        [-20,0,-15,-10,[-20,-15,-10,0]],
        [-20,0,-30,-19,[-30,-20,-19,0]],
        [-20,0,-30,-21,[-30,-21,-20,0]],
        [-20,0,-19,-1,[-20,-19,-1,0]],
    ])(
        'Union for %p is %p is %p is %p',
        (n,n1,k,k1, expected) => {
            expect(new interval(n,n1).union(new interval(k,k1))).toEqual(expected);
        },
    );
 
});