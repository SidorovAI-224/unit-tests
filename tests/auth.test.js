const isPasswordValid = require('../src/auth');

test('��ॢ?ઠ ���?�����? ��஫�', () => {
    expect(isPasswordValid('password123')).toBe(true); // ���?���� ��஫�
    expect(isPasswordValid('short')).toBe(false); // ������ ���⪨� ��஫�
});
