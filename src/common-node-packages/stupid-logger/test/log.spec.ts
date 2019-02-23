import * as assert from 'assert';
import { createSandbox, SinonSandbox } from 'sinon';

import { log } from '../src'

describe('stupid-logger log', () => {
  let sandbox: SinonSandbox;

  before(() => {
    sandbox = createSandbox();
  })

  after(() => {
    sandbox.restore();
  })

  it('should write to console.log', () => {
    const spy = sandbox.spy(console, 'log');
    log('first', 'second');

    assert.deepStrictEqual(spy.getCall(0).args, ['first', 'second'])
  })
});
