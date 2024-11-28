const isPasswordValid = require('../src/auth');

test('Перев?рка вал?дност? пароля', () => {
    expect(isPasswordValid('password123')).toBe(true); // Вал?дний пароль
    expect(isPasswordValid('short')).toBe(false); // Занадто короткий пароль
});
