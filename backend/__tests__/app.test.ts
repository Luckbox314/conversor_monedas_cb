import request from 'supertest';
import app from '../src/app';

describe('GET /', () => {
    beforeAll(() => {
        process.env.PORT = '4000';
      });

    it('should return Hello, World!', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello, World!');
    });
});