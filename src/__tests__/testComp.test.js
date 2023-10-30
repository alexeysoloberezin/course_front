const { expect, test } = require('@jest/globals');

const ts = (a,b) => a + b

test('Отображение текста "Hello, World!"', () => {
  expect(ts(1,2)).toBe(3)
});
