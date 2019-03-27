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

//- `[POST] /api/cohorts`
router.post("/", (req, res) => {
  //   console.log(req.body);
  db("cohorts")
    .insert(req.body)
    .then(ids => {
      const id = ids[0];
      db("cohorts")
        .where({ id })
        // .first()
        .then(ids => {
          res.status(201).json(ids);
        });
    })
    .catch(error => {
      res.status(500).json(error);
    });
});
//- `[GET] /api/cohorts/:id/students`

//- `[PUT] /api/cohorts/:id`
router.put("/:id", async (req, res) => {
  try {
    const count = await db("cohorts")
      .where({ id: req.params.id })
      .update(req.body);

    if (count > 0) {
      const cohort = await db("cohorts")
        .where({ id: req.params.id })
        .first();

      res.status(200).json(cohort);
    } else {
      res.status(404).json({ message: "Cohorts not found" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

//- `[DELETE] /api/cohorts/:id`
router.delete("/:id", (req, res) => {
  console.log(req.body);
  db("cohorts")
    .where({ id: req.params.id })
    .del()
    .then(count => {
      if (count > 0) {
        res.status(204).end();
      } else {
        res.status(404).json({ errorMessage: "Cohort not found" });
      }
    })
    .catch(err => res.status(500).json(err));
});
