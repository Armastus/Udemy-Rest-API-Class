let supertest = require("supertest");
var    should = require('should');
var    server = supertest.agent("http://localhost:3000");

describe("Sample unit test", function() {
    it("should return home page", function(done) {
        server.get("/")
            .expect("Content-type", /json/)
            .expect(200)
            .end(function (err, res) {
                (err === null || err === undefined).should.be.true;
                res.status.should.equal(200);
                res.body.error.should.equal(false);
                done();
            })
    })
});