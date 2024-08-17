import request from 'supertest';
import app from '../src/app';

describe('GET /', () => {
    beforeAll(() => {
        process.env.PORT = '4000';
      });

    it('Should say missing query parameters', async () => {
        const response = await request(app).get('/api/convert');
        expect(response.status).toBe(400);
        expect(response.text).toBe('{"message":"Missing query parameters"}');
    });
});