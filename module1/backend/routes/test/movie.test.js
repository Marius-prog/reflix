const server = require('../../../server');
const request = require('supertest');

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


describe("should test post movie request", () => {
    it("code status 200", async () => {
        const response = await request(server).post('/movies/post').send({
            title: "test title",
            year: 2021,
            time: 111,
            genre: "drama test",
            rating: 111,
            metascore: 111,
            vote: 111,
            gross: 111,
            description: "test drama"
        })
        expect(response.statusCode).toBe(200)
    })

})

