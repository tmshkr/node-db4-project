exports.up = function (knex) {
  return (
    knex.schema
      // recipes
      .createTable("recipes", (tbl) => {
        tbl.increments("id");
        tbl.string("name").notNullable();
      })
      // ingredients
      .createTable("ingredients", (tbl) => {
        tbl.string("name").notNullable();
        tbl.float("quantity").notNullable();
        tbl.string("unit");
        tbl
          .integer("recipe_id")
          .unsigned()
          .notNullable()
          .references("recipes.id")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
        tbl.primary(["recipe_id", "name"]);
      })
      // instructions
      .createTable("instructions", (tbl) => {
        tbl.integer("step_number");
        tbl.string("description").notNullable();
        tbl
          .integer("recipe_id")
          .unsigned()
          .notNullable()
          .references("recipes.id")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
        tbl.primary(["recipe_id", "step_number"]);
      })
  );
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("recipes")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("instructions");
};
