
describe('planetsArray', function() {
    it('planetsArray should be defined as a function', function () {
        expect(typeof planetsArray).toBe('function');
    });
    // it('planetsArray should be return a true when called', function () {
    //     expect(typeof planetsArray()).toBeTruthy();
    // });
})
describe('addPlanets', function() {
    it('planetsArray should be defined as a function', function () {
        expect(typeof addPlanets).toBe('function');
    });
    it('should return false when passed anything besides add, remove, find,' +
        'reverse, or sort', function () {
        expect(addPlanets('no') && addPlanets(undefined) && addPlanets(null) && addPlanets(Array)).toBeFalsy();
    });
})
describe('removePlanets', function() {
    it('planetsArray should be defined as a function', function () {
        expect(typeof removePlanets).toBe('function');
    });
})
describe('findPlanets', function() {
    it('planetsArray should be defined as a function', function () {
        expect(typeof findPlanets).toBe('function');
    });
})
describe('reversePlanets', function() {
    it('planetsArray should be defined as a function', function () {
        expect(typeof reversePlanets).toBe('function');
    });
})
describe('sortPlanets', function() {
    it('planetsArray should be defined as a function', function () {
        expect(typeof sortPlanets).toBe('function');
    });
})