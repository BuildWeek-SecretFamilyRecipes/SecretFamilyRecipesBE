const request = require('supertest');
const server = require('../server.js');

describe('/api/auth', () => {
    describe('/register', () => {
        it('should return 201', () => {
            return request(server).post('/api/auth/register')
                .send({
                    username: 'test000',
                    password: 'pass'
                })
                .then(res => expect(res.status).toBe(201))
        })
    })
    describe('/login', () => {
        it('should return the user object', () => {
            return request(server).post('/api/auth/login')
                .send({
                    username: 'test000',
                    password: 'pass'
                })
                .then(res => expect(res.body.username).toBe('test000'))
        })
    })
})