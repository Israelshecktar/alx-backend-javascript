// Test for console to stdout

const displayMessage = require('../0-console');

test('Display message in STDOUT', () => {
    console.log = jest.fn();
    displayMessage('Hello NodeJS!');
    expect(console.log).toHaveBeenCalledWith('Hello NodeJS!');
});
