exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("instructions")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("instructions").insert([
        {
          recipe_id: 1,
          step_number: 1,
          description:
            "Preheat oven to 375 degrees F. Line a baking pan with parchment paper and set aside.",
        },
        {
          recipe_id: 1,
          step_number: 2,
          description:
            "In a separate bowl mix flour, baking soda, salt. Set aside.",
        },
        {
          recipe_id: 1,
          step_number: 3,
          description: "Cream together butter and sugars until combined.",
        },
        {
          recipe_id: 1,
          step_number: 4,
          description: "Beat in eggs until fluffy.",
        },
        {
          recipe_id: 1,
          step_number: 5,
          description: "Mix in the dry ingredients until combined.",
        },
        {
          recipe_id: 1,
          step_number: 6,
          description: "Add chocolate chips and mix well.",
        },
        {
          recipe_id: 1,
          step_number: 7,
          description:
            "Roll 2-3 tbs of dough at a time into balls and place them evenly spaced on your prepared cookie sheets.",
        },
        {
          recipe_id: 1,
          step_number: 8,
          description: "Bake in preheated oven for approximately 8-10 minutes.",
        },
        {
          recipe_id: 1,
          step_number: 9,
          description:
            "Let them sit on the baking pan for 2 minutes before removing to cooling rack.",
        },
      ]);
    });
};
