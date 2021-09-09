const request = require("supertest");
const app = require("../app");

describe('TESTING THE END POINT USERS', () => {
    it('should show all users', async () => {
        await request(app).get("/users").expect(200);
    });

    it('should show the user with id = 1', async () => {
        await request(app).get("/users/1").expect(200);
    });

    it('should return 404 when cant find a user', async () => {
        await request(app).get("/users/12").expect(404);
    });
});


describe('TESTING THE END POINT INPUTS', () => {
    it('should show all inputs', async () => {
        await request(app).get("/inputs").expect(200);
    });
    
    it('should show the user with id = 1', async () => {
        await request(app).get("/users/1").expect(200);
    });
});