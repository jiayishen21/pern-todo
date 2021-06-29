const Pool = require("pg").Pool;

const pool = new Pool({
	user: "postgres",
	password: "limeRIP5138",
	host: "localhost",
	port: 5432,
	database: "perntodo"
});

module.exports = pool;