const request = require("supertest");
const app = require("../src/app");

describe("Page Pulse API", () => {

    test("should return 400 when URL is missing", async () => {

        const response = await request(app)
            .post("/api/audit")
            .send({});

        expect(response.statusCode).toBe(400);
        expect(response.body.success).toBe(false);
    });

    test("should return 400 for invalid URL", async () => {

        const response = await request(app)
            .post("/api/audit")
            .send({
                url: "hello"
            });

        expect(response.statusCode).toBe(400);
        expect(response.body.success).toBe(false);
    });

    test("should successfully audit example.com", async () => {

        const response = await request(app)
            .post("/api/audit")
            .send({
                url: "https://example.com"
            });

        expect(response.statusCode).toBe(200);

        expect(response.body.success).toBe(true);

        expect(response.body.data).toHaveProperty("status");

        expect(response.body.data).toHaveProperty("title");

        expect(response.body.data).toHaveProperty("responseTime");

        expect(response.body.data).toHaveProperty("wordCount");

    });

});