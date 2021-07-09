// const request = require('supertest');
// const app = require('../../../app');
const mongoose = require("mongoose");



beforeEach((done) => {
    mongoose.connect("mongodb://localhost:27017/reflix",
        {useNewUrlParser: true, useUnifiedTopology: true},
        () => done());
});

afterEach((done) => {
    mongoose.connection.db.dropDatabase(() => {
        mongoose.connection.close(() => done())
    });
});

// test("GET /movies/", async () => {
//     const post = await Post.create({
//         title: "Post 1",
//         year: 2020,
//         time: 222,
//         genre: 'test',
//         rating: 22,
//         metascore: 33,
//         vote: 33,
//         gross: 33,
//         description: 'test description'
//     });
//
//     await supertest(app).get("/movies/")
//         .expect(200)
//         .then((response) => {
// Check type and length
// expect(Array.isArray(response.body)).toBeTruthy();
// expect(response.body.length).toEqual(1);

// Check data
// expect(response.body[0]._id).toBe(post.id);
//             expect(response.body[0].title).toBe(post.title);
//             expect(response.body[0].year).toBe(post.year);
//         });
// });

// describe('Sample Test', () => {
//     it('should test that true === true', () => {
//         expect(true).toBe(true)
//     })
// })

it('Testing to see if Jest works', () => {
    expect(1).toBe(1)
});

it('Testing to see if Jest works', () => {
    expect(1).toBe(1)
});

describe('Sample Test', () => {
    it('should test that true === true', () => {
        expect(true).toBe(true)
    })
});

// describe('Post Endpoints', () => {
//     it('should create a new post', async () => {
//         const res = await request(app)
//             .get('/users/')
//             .send({
//                 name: 'test name',
//                 email: 'test@test.com',
//                 password: 'test123'
//             })
//         expect(res.statusCode).toEqual(200)
//         expect(res.body).toHaveProperty('post')
//     })
// });
