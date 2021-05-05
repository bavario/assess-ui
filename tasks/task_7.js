function keysAndValues(object) {

}

describe('Task 7', () => {
    it("should return empty array", function () {
        expect(keysAndValues({}).toBe([]));
    });

    it("should return keys and values", function () {
        expect(keysAndValues({a: 1, b: 2, c: 3}).toBe([['a', 'b', 'c'], [1, 2, 3]]));
    });

    it("should return keys and values, with keys sorted alphabetically", function () {
        expect(keysAndValues({b: 2, a: 4, c: 3}).toBe([['a', 'b', 'c'], [4, 2, 3]]));
    });
});
