function keysAndValues(object) {

}

// ------------------------------------------------------------------------------------

describe('Task 7', () => {
    it("should return empty array", function () {
        expect(keysAndValues({})).toEqual([]);
    });

    it("should return keys and values", function () {
        expect(keysAndValues({a: 1, b: 2, c: 3})).toEqual([['a', 'b', 'c'], [1, 2, 3]]);
    });

    it("should return keys and values, both arrays sorted alphabetically by key", function () {
        expect(keysAndValues({b: 2, a: 4, c: 3})).toEqual([['a', 'b', 'c'], [4, 2, 3]]);
    });
});
