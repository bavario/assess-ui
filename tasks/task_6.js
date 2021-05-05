function likes(names) {

}

// ------------------------------------------------------------------------------------

describe('Task 6', () => {
    it('empty', function () {
        expect(likes([])).toBe('no one likes this');
    });

    it('single', function () {
        expect(likes(['Peter'])).toBe('Peter likes this');
    });

    it('multiple', function () {
        expect(likes(['Jacob', 'Alex'])).toBe('Jacob and Alex like this');
    });

    it('> 3', function () {
        expect(likes(['Alex', 'Jacob', 'Mark', 'Max'])).toBe('Alex, Jacob and 2 others like this');
    });
});
