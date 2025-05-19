const { mergeStrings } = require('../src/Main_functions.js');


test('merge ciao e pippo', () => {
    const str1 = 'ciao';
    const str2 = 'pippo';
    const expected = 'ciao pippo';
    const result = mergeStrings(str1, str2);
    expect(result).toBe(expected);
}
);
test('merge hello e world', () => {
    const str1 = 'hello';
    const str2 = 'world';
    const expected = 'hello world';
    const result = mergeStrings(str1, str2);
    expect(result).toBe(expected);
}
);