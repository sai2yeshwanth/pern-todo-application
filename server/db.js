const Pool = require("pg").Pool;

const pool = new Pool({
    user: "myusername",
    password: "mypassword",
    host: "127.0.0.1",
    port: 5432,
    database: "perntodo",
});

module.exports = pool;