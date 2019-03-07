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

