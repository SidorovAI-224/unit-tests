/**
 * ���⢮��� �冷� � ������ �� �᫮.
 * @param {string} value - ���ਪ���, "$50".
 * @returns {number} - ���ਪ���, 50.
 */
function parseCurrency(value) {
    return parseFloat(value.replace('$', ''));
}

/**
 * ��ଠ��� �᫮ � �ଠ� �����.
 * @param {number} value - ���ਪ���, 100.
 * @returns {string} - ���ਪ���, "$100".
 */
function formatCurrency(value) {
    return `$${value.toFixed(2)}`;
}

/**
 * ����� ��� ���祭�� �����.
 * ?�⥣��� ��? ����।�? �㭪�?� 
 * ��� ��������� �ଠ⮢���� ���祭�.
 * @param {string} value1 - ���ਪ���, "$50".
 * @param {string} value2 - ���ਪ���, "$30".
 * @returns {string} - ���ਪ���, "$80".
 */
function addCurrencies(value1, value2) {
    const num1 = parseCurrency(value1);
    const num2 = parseCurrency(value2);
    const sum = num1 + num2;
    return formatCurrency(sum);
}

module.exports = { parseCurrency, formatCurrency, addCurrencies };
