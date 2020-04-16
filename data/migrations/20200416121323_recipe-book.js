exports.up = function (knex) {
  return (
    knex.schema
      // ingredients
      .createTable("ingredients", (tbl) => {
        tbl.increments("id");
        tbl.string("name").notNullable();
        tbl.string("quantity").notNullable();
      })
      // recipes
      .createTable("recipes", (tbl) => {
        tbl.increments("id");
        tbl.string("name").notNullable();
      })
      // ingredient_list
      .createTable("ingredient_list", (tbl) => {
        tbl
          .integer("recipe_id")
          .unsigned()
          .notNullable()
          .references("recipes.id")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
        tbl
          .integer("ingredient_id")
          .unsigned()
          .notNullable()
          .references("ingredients.id")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
        tbl.primary(["recipe_id", "ingredient_id"]);
      })
      // steps
      .createTable("steps", (tbl) => {
        tbl.increments("id");
        tbl.text("description").notNullable();
      })
      // instructions
      .createTable("instructions", (tbl) => {
        tbl.integer("step_number");
        tbl
          .integer("recipe_id")
          .unsigned()
          .notNullable()
          .references("recipes.id")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
        tbl
          .integer("step_id")
          .unsigned()
          .notNullable()
          .references("step.id")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
        tbl.primary(["recipe_id", "step_number"]);
      })
  );
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("ingredients")
    .dropTableIfExists("ingredient_list")
    .dropTableIfExists("recipes")
    .dropTableIfExists("steps")
    .dropTableIfExists("instructions");
};
