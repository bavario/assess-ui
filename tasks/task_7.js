function keysAndValues(object) {

}

describe('Task 7', () => {
    it("should return empty array", () => {
        expext(keysAndValues({}).toBe([]));
    });

    it("should return keys and values", () => {
        expext(keysAndValues({a: 1, b: 2, c: 3}).toBe([['a', 'b', 'c'], [1, 2, 3]]));
    });

    it("should return keys and values, with keys sorted alphabetically", () => {
        expext(keysAndValues({b: 2, a: 4, c: 3}).toBe([['a', 'b', 'c'], [4, 2, 3]]));
    });
});
