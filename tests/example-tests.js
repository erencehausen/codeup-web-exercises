describe("returnExampleMsg", function() {
    it("should be defined", function() {
        expect(returnExampleMsg).toBeDefined();
    });
    it("should return example message", function() {
        expect(returnExampleMsg()).toEqual("This is an example");
    });
});