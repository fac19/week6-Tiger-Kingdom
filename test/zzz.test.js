const test = require("tape");
const db = require("../src/db/connection");

test("Dummy test, just want to close db connection!", t => {
        db.end();
        t.end();
});