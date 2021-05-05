function task(number) {

    if (number > 0) {
        var a = 'var';
    }

    if (number > 50){
        let a = 'let';
    }

    return a;
}

// ------------------------------------------------------------------------------------

it('Task 3', function () {
    expect(task(100)).toBe('');
});
