exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("ingredients").insert([
        { recipe_id: 1, name: "salted butter", quantity: 1, unit: "cup" },
        { recipe_id: 1, name: "sugar", quantity: 1, unit: "cup" },
        { recipe_id: 1, name: "large eggs", quantity: 2 },
        { recipe_id: 1, name: "flour", quantity: 3, unit: "cups" },
        { recipe_id: 1, name: "baking soda", quantity: 1, unit: "tsp" },
        { recipe_id: 1, name: "salt", quantity: 1, unit: "tsp" },
        { recipe_id: 1, name: "chocolate chips", quantity: 2, unit: "cups" },
      ]);
    });
};
