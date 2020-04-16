const db = require("./db-config");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
};

function getRecipes() {
  return db("recipes");
}

function getShoppingList(recipe_id) {
  return db("ingredients")
    .select("name", "quantity", "unit")
    .where({ recipe_id });
}

function getInstructions(recipe_id) {
  return db("instructions")
    .select("step_number", "description")
    .where({ recipe_id });
}
