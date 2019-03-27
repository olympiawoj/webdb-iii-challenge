const router = require("express").Router();

const knex = require("knex");

const knexConfig = require("../knexfile.js");
const db = knex(knexConfig.development);

router.get("/", (req, res) => {
  console.log(req.body);
  db("cohorts")
    .then(cohorts => {
      res.status(200).json(cohorts);
    })
    .catch(err => res.status(500).json(error));
});

module.exports = router;
