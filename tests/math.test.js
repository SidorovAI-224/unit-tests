const add = require('../src/math');

test('��������� �ᥫ', () => {
    expect(add(2, 3)).toBe(5); // ��?��� 2 + 3 = 5
    expect(add(-1, 1)).toBe(0); // ��?��� -1 + 1 = 0
});

