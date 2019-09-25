const request = require('supertest');
const server = require('../server.js');

describe('/api/auth', () => {
    describe('/register register new user', () => {
        it('should return 201', () => {
            expect(true).toBe(true);
            return request(server).post('/api/auth/register')
                .send({
                    username: 'test0',
                    password: 'pass'
                })
                .then(res => expect(res.status).toBe(201))
        })
    })
})