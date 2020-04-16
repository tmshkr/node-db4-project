const db = require("./db-config");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
  getRecipesByIngredient,
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

function getRecipesByIngredient(name) {
  return db("ingredients as i")
    .join("recipes as r", "r.id", "i.recipe_id")
    .select("r.name")
    .where({ "i.name": name });
}
