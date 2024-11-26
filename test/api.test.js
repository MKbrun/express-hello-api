const request = require('supertest');
const app = require('../index');

describe('API Endpoint Tests', () => {
  it('should return 200 for GET /health', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("ok");
  });

  it('should return 200 for GET /hello', async () => {
    const res = await request(app).get('/hello');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("Hello World");
  });
});