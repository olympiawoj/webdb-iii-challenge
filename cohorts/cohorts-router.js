const router = require("express").Router();

const knex = require("knex");

const knexConfig = require("../knexfile.js");
const db = knex(knexConfig.development);

//- `[GET] /api/cohorts`
router.get("/", (req, res) => {
  console.log(req.body);
  db("cohorts")
    .then(cohorts => {
      res.status(200).json(cohorts);
    })
    .catch(err => res.status(500).json(error));
});

module.exports = router;

//- `[GET] /api/cohorts/:id`
router.get("/:id", (req, res) => {
  console.log(req.params);
  db("cohorts")
    .where({ id: req.params.id })
    .first()
    .then(cohort => res.status(200).json(cohort))
    .catch(err => res.status(500).json(error));
});
