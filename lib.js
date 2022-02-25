const assert = require('assert')

class TestError extends Error {
  constructor (type, actual, expected) {
    super('test error')
    this.type = type
    this.actual = actual
    this.expected = expected
  }
}

global.test = (testName, cb) => {
  try {
    cb()
  } catch (error) {
    if (error instanceof TestError) {
      if (error.type === 'toBe') {
        console.error(
          `${testName}: Expected: ${error.expected} but got ${error.actual}`
        )
      } else if (error.type === 'toBeOneOf') {
        console.error(
          `${testName}: Expected one of: ${error.expected} but got ${error.actual}`
        )
      }
      console.error(error.stack.split('\n')[2])
      process.exit(1)
    }
    console.error(`${testName}: Unknown Error occurred`)
    console.error(error)
    process.exit(1)
  }
}

global.expect = actual => {
  return {
    toBe: expected => {
      try {
        assert.deepStrictEqual(actual, expected)
      } catch {
        throw new TestError(
          'toBe',
          JSON.stringify(actual),
          JSON.stringify(expected)
        )
      }
    },
    toBeOneOf: expected => {
      if (!expected.includes(actual)) {
        throw new TestError(
          'toBeOneOf',
          JSON.stringify(actual),
          JSON.stringify(expected)
        )
      }
    }
  }
}
