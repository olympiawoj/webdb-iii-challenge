const router = require("express").Router();

const knex = require("knex");
const knexConfig = require("../knexfile.js");

const db = knex(knexConfig.development);

// router.get("/", async (req, res) => {
//   //   const students = db("students");
//   console.log(req.params);
//   try {
//     const students = await db("students");
//     res.status(200).json(students);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

//- `[GET] /students/:id` This route will return the student with the matching `id`.
// router.get("/:id", async (req, res) => {
//   try {
//     const student = await db("students")
//       .where({ id: req.params.id })
//       .first();
//     res.status(200).json(student);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

router.get("/:id", async (req, res) => {
  try {
    const student = await db("students")
      .join("cohorts", "students.cohort_id", "=", "cohorts.id")
      .select("students.id", "students.name", "cohorts.name as cohort")
      .where({ "students.id": req.params.id });
    //   .first();
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
