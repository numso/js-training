require('./lib')

/////////////

function typeChecker (someValue) {
  return
}

/////////////

test('undefined', () => {
  expect(typeChecker()).toBe('undefined')
})

test('null', () => {
  expect(typeChecker(null)).toBe('null')
})

test('string', () => {
  expect(typeChecker('yo')).toBe('string')
})

test('number', () => {
  expect(typeChecker(7)).toBe('number')
})

test('boolean', () => {
  expect(typeChecker(true)).toBe('boolean')
})

test('object', () => {
  expect(typeChecker({})).toBe('object')
})

test('array', () => {
  expect(typeChecker([])).toBe('array')
})

test('function', () => {
  expect(typeChecker(() => {})).toBe('function')
})

test('array', () => {
  expect(typeChecker(new Date())).toBe('date')
})
