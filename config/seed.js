require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Reds', sortOrder: 10},
    {name: 'Oranges', sortOrder: 20},
    {name: 'Yellows', sortOrder: 30},
    {name: 'Greens', sortOrder: 40},
    {name: 'Blues', sortOrder: 50},
    {name: 'Indigos', sortOrder: 60},
    {name: 'Violets', sortOrder: 70},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Red-1', emoji: '🇲🇾 ', category: categories[0], price: 5.95},
    {name: 'Red-2', emoji: '🇲🇾 ', category: categories[0], price: 6.95},
    {name: 'Red-3', emoji: '🇲🇾 ', category: categories[0], price: 3.95},
    {name: 'Orange-1', emoji: '🇲🇾 ', category: categories[1], price: 14.95},
    {name: 'Orange-2', emoji: '🇲🇾 ', category: categories[1], price: 13.95},
    {name: 'Orange-3', emoji: '🇲🇾 ', category: categories[1], price: 25.95},
    {name: 'Yellow-1', emoji: '🇲🇾 ', category: categories[2], price: 1.95},
    {name: 'Yellow-2', emoji: '🇲🇾 ', category: categories[2], price: 4.95},
    {name: 'Green-1', emoji: '🇲🇾 ', category: categories[3], price: 3.95},
    {name: 'Green-2', emoji: '🇲🇾 ', category: categories[3], price: 7.95},
    {name: 'Green-3', emoji: '🇲🇾 ', category: categories[3], price: 1.95},
    {name: 'Blue-1', emoji: '🇲🇾 ', category: categories[4], price: 2.95},
    {name: 'Blue-2', emoji: '🇲🇾 ', category: categories[4], price: 3.95},
    {name: 'Indigo-1', emoji: '🇲🇾 ', category: categories[5], price: 1.95},
    {name: 'Indigo-2', emoji: '🇲🇾 ', category: categories[5], price: 0.95},
    {name: 'Indigo-3', emoji: '🇲🇾 ', category: categories[5], price: 2.95},
    {name: 'Indigo-4', emoji: '🇲🇾 ', category: categories[5], price: 3.95},
    {name: 'Violet-1', emoji: '🇲🇾 ', category: categories[6], price: 0.95},
    {name: 'Violet-2', emoji: '🇲🇾 ', category: categories[6], price: 0.95},
    {name: 'Violet-3', emoji: '🇲🇾 ', category: categories[6], price: 8.95},
    {name: 'Violet-5', emoji: '🇲🇾 ', category: categories[6], price: 3.95},
    {name: 'Violet-5', emoji: '🇲🇾 ', category: categories[6], price: 7.95},
  ]);

  console.log(items)

  process.exit();

})();