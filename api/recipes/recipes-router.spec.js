const request = require('supertest');

const server = require('../server.js');


let token = {};

beforeAll((done) => {
    request(server)
        .post('/api/login')
        .send({
            "username": "testuser",
            "password": "testpassword"
        })
        .end((err, response) => {
            console.log(err)
            token = response.body.token
            done()
        });
});


describe('/api', () => {
    describe('/users/:user_id/recipes', () => {
        it('should return 200', () => {
            return request(server).get('/api/users/1/recipes')
                .set('Authorization' , `Bearer ${token}`)
                .then(res => expect(res.status).toBe(200))
        })
    })
    describe('/recipes/:id', () => {
        it('should return 200', () => {
            return request(server).get('/api/recipes/1')
                .set('Authorization' , `Bearer ${token}`)
                .then(res => expect(res.status).toBe(200))
        })
    })
    describe('/users/:user_id/recipes', () => {
        it('should return 201', () => {
            return request(server).post('/api/users/1/recipes')
                .set('Authorization' , `Bearer ${token}`)
                .send({
                        "title": "Corn Bread",
                        "source": "Granny",
                        "category": "Side Dish",
                        "ingredients": "1cup cornmeal",
                        "instructions": "Mix ingredients"
                    })
                .then(res => expect(res.status).toBe(201))
        })
    })
    describe('/users/:user_id/recipes', () => {
        it('should return 200', () => {
            return request(server).put('/api/users/1/recipes')
                .set('Authorization' , `Bearer ${token}`)
                .send({
                        "title": "Sweet Corn Bread",
                        "source": "Auntie",
                        "category": "Side Dish",
                        "ingredients": "1cup cornmeal",
                        "instructions": "Mix ingredients"
                    })
                .then(res => expect(res.status).toBe(200))
        })
    })
    describe('/recipes/:id', () => {
        it('should return 200', () => {
            return request(server).del('/api/recipes/1')
                .set('Authorization' , `Bearer ${token}`)
                .then(res => expect(res.status).toBe(200))
        })
    })
})