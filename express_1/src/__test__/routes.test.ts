import * as user from "../handlers/user";
import app from "../server";

import supertest from "supertest";

describe("GET /", () => {
  it("should send back some data", async () => {
    const res = await supertest(app).get("/");

    expect(res.body.message).toBe("Hello");
  });
});
// user handler text
// describe("user handler", () => {
//   let createdUser;
//   it("should create a new user"),
//     async () => {
//       const req = { body: { username: "temp", password: "pass" } };
//       const res = {
//         json({ token }) {
//           expect(token).toBeTruthy();
//           createdUser = user; // save the created user to use in cleanup
//         },
//       };
//       await user.createNewUser(req, res, () => {});
//     };
// });
