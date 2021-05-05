function likes(names) {

}

// ------------------------------------------------------------------------------------

describe('Task 6', () => {
    it('empty', () => {
        expect(likes([])).toBe('no one likes this');
    });

    it('single', () => {
        expect(likes(['Peter'])).toBe('Peter likes this');
    });

    it('multiple', () => {
        expect(likes(['Jacob', 'Alex'])).toBe('Jacob and Alex like this');
    });

    it('> 3', function () {
        expect(likes(['Alex', 'Jacob', 'Mark', 'Max'])).toBe('Alex, Jacob and 2 others like this');
    });
});
