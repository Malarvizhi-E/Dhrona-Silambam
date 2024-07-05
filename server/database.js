const {Pool} = require("pg");

const pool = new Pool({
    user: "postgres",
    password:"Malar@2005",
    host:"localhost",
    port:5432,
    database:"dhrona"
});


module.exports = pool