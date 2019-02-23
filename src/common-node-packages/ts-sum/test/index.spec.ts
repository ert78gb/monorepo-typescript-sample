import * as assert from 'assert';

import { sum } from '../src'

describe('ts-sum', () => {
  it('should calculate the correct value', () => {
    const result = sum(5, 10)

    assert.deepStrictEqual(result, 15)
  })
})
