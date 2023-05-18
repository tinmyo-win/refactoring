const { add } = require('../add')

test('adding 123 + 345', () => {
    const result = add(123, 345)

    expect(result).toBe(468);
});

test('adding string number "123" + "345"', () => {
    const result = add("123", "345")

    expect(result).toBe(468);
});
