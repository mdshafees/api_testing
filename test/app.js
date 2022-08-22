import supertest from "supertest";
const request = supertest("https://gorest.co.in/public/v2");
import { expect } from "chai";


describe("Test", () => {

    it("GET /user", (done) => {
        request.get("/users").end((err, res) => {
            expect(err).to.be.null;
            done();
        })
    }) 
})

//    "test": "mocha -r ts-node/register src/**/app.ts"
// "@types/chai": "^4.3.3",
// "@types/mocha": "^9.1.1",
//  "@types/supertest": "^2.0.12",
