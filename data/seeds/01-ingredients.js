exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("ingredients").insert([
        { name: "salted butter", quantity: "1 cup" },
        { name: "sugar", quantity: "1 cup" },
        { name: "eggs", quantity: "2 large" },
        { name: "flour", quantity: "3 cups" },
        { name: "baking soda", quantity: "1 tsp" },
        { name: "salt", quantity: "1 tsp" },
        { name: "chocolate chips", quantity: "2 cups" },
      ]);
    });
};
