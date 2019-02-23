import * as request from 'supertest';

import { server } from '../src/server'

describe('post handler', () => {
  it('should return with the request body', () => {
    return request(server)
      .post('/')
      .set('Content-Type', 'application/json')
      .send({foo: 'bar'})
      .expect('Content-Type', /json/)
      .expect(200, {body: {foo: 'bar'}});
  })
})
