require('./lib')

test('undefined', () => {
  let a = 'yo'
  expect(typeof a).toBe('undefined')
})

test('string', () => {
  let a
  expect(typeof a).toBe('string')
})

test('number', () => {
  let a
  expect(typeof a).toBe('number')
})

test('boolean', () => {
  let a
  expect(typeof a).toBe('boolean')
})

test('object', () => {
  let a
  expect(typeof a).toBe('object')
})

test('function', () => {
  let a
  expect(typeof a).toBe('function')
})
