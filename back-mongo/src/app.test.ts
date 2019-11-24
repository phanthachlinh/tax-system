import * as request from 'supertest';

import app from './app'
describe('jest init',()=>{
  it('should be true',()=>{
    expect(true).toBe(true)
  })
})
describe('Test the root path', () => {
    test('It should response the GET method', async () => {
      const response:any= await request(app).get('/');
      console.log(response);
      expect(response.statusCode).toBe(200);
  });
});
describe('Test the root path', () => {
    test('It should response the GET method', async () => {
      const response:any= await request(app).get('/');
      expect(response.text).toBe('dfs');
  });
});
