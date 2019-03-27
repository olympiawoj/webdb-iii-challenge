//Step 2: Run the server and tell us what port to listen to

const server = require("./server.js");
const knex = require("knex");

const knexConfig = require("./knexfile.js");
const db = knex(knexConfig);

const port = 5000;

server.listen(port, () => console.log(`\n** API running on port ${port}`));
