exports.up = function(knex, Promise) {
  return knex.schema.createTable("students", function(tbl) {
    //primary key, called id and make it auto increment
    tbl.increments("id");
    //name
    tbl
      .string("name", 128)
      .notNullable()
      .unique();
    //foriegn key
    tbl
      .integer("cohort_id") ///the column name in this table(cohorts)
      .unsigned()
      .references("id") //primary key in related (parent) table (cohorts)
      .inTable("cohorts")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("students");
};
