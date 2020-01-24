
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('dishes')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {id: 1, name: 'Fancy Salad'},
        {id: 2, name: 'Peanut Butter and Jelly Sandwich'},
        {id: 3, name: 'Fancy Toasted Ham and Cheese'}
      ]);
    });
};
