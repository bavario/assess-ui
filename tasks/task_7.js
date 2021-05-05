function keysAndValues(object) {

}

describe('Task 7', () => {
    it("should return empty array", () => {
        expext(keysAndValues({}).toBe([]));
    });

    it("should return keys and values", () => {
        expext(keysAndValues({a: 1, b: 2, c: 3}).toBe([['a', 'b', 'c'], [1, 2, 3]]));
    });
});
