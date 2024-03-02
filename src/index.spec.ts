import supertest from "supertest";
import { server } from "./index";

describe("Server", () => {
  const request = supertest.agent(server);
  afterAll(() => server.close());

  it("Should get /", async () => {
    const response = await request.get("/");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ data: "I am Data" });
  });
});
