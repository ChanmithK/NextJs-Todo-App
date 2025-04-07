const request = require("supertest");
const app = require("../src/app");

jest.mock("../src/db", () => ({
  query: jest.fn().mockResolvedValue([
    [
      {
        id: 1,
        title: "Mock Task",
        description: "Test desc",
        completed: false,
      },
    ],
  ]),
}));

describe("GET /api/tasks", () => {
  it("should return 200 and an array of tasks", async () => {
    const response = await request(app).get("/api/tasks");
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body[0].title).toBe("Mock Task");
  });
});
