
describe('multiplySelfByTwo', function () {
    it('multiplySelfByTwo should be a defined function', function () {
        expect(typeof multiplySelfByTwo).toBe('function');
    });
    it('multiplySelfByTwo should return a 5 when passed "5"', function () {
        expect(multiplySelfByTwo("5")).toBe(5);
    });
    it('multiplySelfByTwo should return false when passed undefined', function () {
        expect(multiplySelfByTwo(undefined)).toBe(false);
    });
    it('multiplySelfByTwo should return false when passed null', function () {
        expect(multiplySelfByTwo(null)).toBe(false);
    });
    it('multiplySelfByTwo should return false when passed any unexpected inputs such as array, function, ect...', function () {
        expect(multiplySelfByTwo(Array)).toBe(false);
    });
    it('should return the correct string output when passed one integer', function () {
        expect(multiplySelfByTwo()).toBe("2\n" +
        "4\n" +
        "8\n" +
        "16\n" +
        "32\n" +
        "64\n" +
        "128\n" +
        "256\n" +
        "512\n" +
        "1024\n" +
        "2048\n" +
        "4096\n" +
        "8192\n" +
        "16384\n" +
        "32768\n" +
        "65536");
    });
})

describe('iceCreamSeller', function () {
    it('iceCreamSeller should be a defined function', function () {
        expect(typeof iceCreamSeller).toBe('function');
    });
})

