require('./lib')

test('add/2', () => {
  let add
  expect(add(2, 2)).toBe(4)
  expect(add(7, 9)).toBe(16)
})

test('add/n', () => {
  let add
  expect(add(2)).toBe(2)
  expect(add(7, 9)).toBe(16)
  expect(add(7, 9, 1, 6, 8)).toBe(31)
  expect(add(7, -1, -1, 2)).toBe(7)
})

test('speak/0', () => {
  let speak
  expect(speak.call('Frank')).toBe('Hello Frank')
  expect(speak.apply('George')).toBe('Hello George')
  expect(speak.bind('Herbert')()).toBe('Hello Herbert')
})

test('map/2', () => {
  let map
  expect(map([1, 2, 3], a => a * 2)).toBe([2, 4, 6])
  expect(map([1, 2, 3], a => a * 3)).toBe([3, 6, 9])
  expect(map([1, 2, 3], a => 10 - a)).toBe([9, 8, 7])
})

test('filter/2', () => {
  let filter
  expect(filter([1, 2, 3], a => a <= 2)).toBe([1, 2])
  expect(filter([1, 2, 3], a => a % 2 === 0)).toBe([2])
  expect(filter([1, 2, 3], a => a >= 2)).toBe([2, 3])
})
