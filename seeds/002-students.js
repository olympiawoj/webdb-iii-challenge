exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("students")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("students").insert([
        { name: "Student1", cohort_id: 2 },
        { name: "Students2", cohort_id: 2 },
        { name: "Students3", cohort_id: 3 }
      ]);
    });
};
