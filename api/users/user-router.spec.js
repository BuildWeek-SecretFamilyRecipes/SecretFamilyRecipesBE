const request = require('supertest');
const server = require('../server.js');

describe('/api/users', () => {
    describe('/:id', () => {
        it('should return user', () => {
            return request(server).get('/api/users/1')
                .then(res => expect(res.user.id).toBe('1'))
        })
    })
})