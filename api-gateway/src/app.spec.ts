import request from 'supertest';
import { app } from './app';
import { Trip } from './types/trip'

describe("Test getting the trips", () => {
    const GET_PATH = "/api/trips";

    test("It should response the GET method", async () => {
      return await request(app).get(GET_PATH)
        .expect(200);
    });
});