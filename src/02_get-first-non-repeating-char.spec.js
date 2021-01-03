const solution = require('./02_get-first-non-repeating-char')

test('Test 1 - "this is the string"', () => {
  expect(solution('this is the string')).toBe('e')
})

test('Test 2 - "persuit is a good place to work"', () => {
  expect(solution('persuit is a good place to work')).toBe('u')
})

test('Test 3 - "we have free coffee"', () => {
  expect(solution('we have free coffee')).toBe('w')
})

test('Test 4 - "persuit of happiness is hopefully for this year"', () => {
  expect(solution('persuit of happiness is hopefully a wish for this new year')).toBe(null)
})
