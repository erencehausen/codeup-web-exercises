
//Query user test
describe('queryUser', function () {
    it('queryUser should be a defined function', function () {
        expect(typeof queryUser).toBe('function');
    });
    it('queryUser should return a 5 when passed "5"', function () {
        expect(queryUser("5")).toBe(5);
    });
    it('queryUser should return false when passed undefined', function () {
        expect(queryUser(undefined)).toBe(false);
    });
    it('queryUser should return false when passed null', function () {
        expect(queryUser(null)).toBe(false);
    });
    it('queryUser should return false when passed any unexpected inputs such as array, function, ect...', function () {
        expect(queryUser(Array)).toBe(false);
    });
})