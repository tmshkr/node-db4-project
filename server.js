const express = require("express");
const server = express();

const db = require("./data/db-helper");

server.use(express.json());

server.get("/api", (req, res) => {
  res.json({ api: "running..." });
});

server.get("/api/recipes", (req, res) => {
  db.getRecipes()
    .then((recipes) => res.json(recipes))
    .catch((err) => {
      console.error(err);
      res
        .status(500)
        .json({ message: "There was a problem geting the recipes" });
    });
});

server.get("/api/recipes/:id/shoppingList", (req, res) => {
  db.getShoppingList(req.params.id)
    .then((ingredients) => res.json(ingredients))
    .catch((err) => {
      console.error(err);
      res
        .status(500)
        .json({ message: "There was a problem getting the shopping list" });
    });
});

server.get("/api/recipes/:id/instructions", (req, res) => {
  db.getInstructions(req.params.id)
    .then((instructions) => res.json(instructions))
    .catch((err) => {
      console.error(err);
      res
        .status(500)
        .json({ message: "There was a problem getting the shopping list" });
    });
});

server.get("/api/ingredients/:name/recipes", (req, res) => {
  db.getRecipesByIngredient(req.params.name)
    .then((recipes) =>
      recipes.length
        ? res.json(recipes)
        : res.status(404).send("no recipes use that ingredient")
    )
    .catch((err) => {
      console.error(err);
      res
        .status(500)
        .json({ message: "There was a problem getting the recipes" });
    });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
