// require('ts-node')
//   .register()
const assert = require('assert')

const { sub } =  require('../src')

describe('js-sum', () => {
  it('should calculate the correct value', () => {
    const result = sub(5, 10)

    assert.deepStrictEqual(result, -5)
  })
})
