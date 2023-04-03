require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    { name: 'Raw Flower', sortOrder: 10 },
          { name: 'Gummies', sortOrder: 20 },
          { name: 'Candies', sortOrder: 30 },
          { name: 'Tinctures-Base Oil', sortOrder: 40 },
          { name: 'Topicals', sortOrder: 50 },
          { name: 'Marshmallows', sortOrder: 60 },
    // {name: 'Sativas', sortOrder: 10},
    // {name: 'Indicas', sortOrder: 20},
    // {name: 'Hybrids', sortOrder: 30},
    
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
{name: "R4", emoji: "oz", category: categories[0], price: "$ -" },
{name: "ACDC", emoji: "oz",category: categories[0],price: "$ -"},
{name: "MW",emoji: "oz",category: categories[0],price: "$ -"},
{name: "DD",emoji: "oz",category: categories[0],price: "$ -"},
{name: "MW/DHDS",emoji: "oz",category: categories[0],price: "$ -"},
{name: "LemD",emoji: "oz",category: categories[0],price: "$ -"},
{name: "Sativa",emoji: "oz",category: categories[0],price: "$ -"},
{name: "Indica",emoji: "oz",category: categories[0],price: "$ -"},
{name: "Cotton candy",emoji: "oz",category: categories[0],price: "$ -"},
{name: "Cheese",emoji: "oz",category: categories[0],price: "$ -"},
{name: "Lilac diesel",emoji: "oz",category: categories[0],price: "$ -"},
{name: "Citral glue",emoji: "oz",category: categories[0],price: "$ -"},
{name: "Sleep CBG",emoji: "1 oz per pack-packs",price: "#REF!"},
{name: "Sleep CBD/ACDC",emoji: "1 oz per pack-packs",category: categories[1],price: "#REF!"},
{name: "Sleep Indica",emoji: "1 oz per pack-packs",category: categories[1],price: "#REF!"},
{name: "Lift",emoji: "1 oz per pack-packs",category: categories[1],price: "#REF!"},
{name: "Recovery",emoji: "1 oz per pack-packs",category: categories[1],price: "#REF!"},
{name: "Daytime CBG",emoji: "1 oz per pack-packs",category: categories[1],price: "#REF!"},
{name: "CBD/CBN",emoji: "oz",category: categories[2],price: "#REF!"},
{name: "Lemongrass",emoji: "oz",category: categories[2],price: "#REF!"},
{name: "Watermelon",emoji: "oz",category: categories[2],price: "#REF!"},
{name: "Woe",emoji: "oz",category: categories[2],price: "#REF!"},
{name: "CBG",emoji: "oz",category: categories[2],price: "#REF!"},
{name: "Indica glycerin",emoji: "oz",category: categories[3],price: "#REF!"},
{name: "Sativa",emoji: "oz",category: categories[3],price: "#REF!"},
{name: "Union custom",emoji: "oz",category: categories[3],price: "#REF!"},
{name: "CBN MCT",emoji: "oz",category: categories[3],price: "#REF!"},
{name: "Chaga",emoji: "oz",category: categories[3],price: "#REF!"},
{name: "Garden of Bloom",emoji: "oz",category: categories[4],price: "#REF!"},
{name: "Garden of Peace",emoji: "oz",category: categories[4],price: "#REF!"},
{name: "Lip Lover",emoji: "oz",category: categories[4],price: "#REF!"},
{name: "Massage Oil Cream",emoji: "oz",category: categories[4],price: "#REF!"},
{name: "No 10",emoji: "oz",category: categories[4],price: "#REF!"},
{name: "Therapeutic Touch",emoji: "oz",category: categories[4],price: "#REF!"},
{name: "Soaps",emoji: "each",category: categories[4],price: "#REF!"},
{name: "TLC Cream Small",category: categories[4],emoji: "oz",price: "#REF!"},
{name: "TLC Cream Large",emoji: "oz",category: categories[4],price: "#REF!"},
{name: "Bath Balms sm",emoji: "oz",category: categories[4],price: "#REF!"},
{name: "Bath Balms lg",emoji: "oz",category: categories[4],price: "#REF!"},
{name: "Indica",emoji: "each",category: categories[5],price: "#REF!"},
{name: "Sative",emoji: "each",category: categories[5],price: "#REF!"},
{name: "CBG",emoji: "each",category: categories[5],price: "#REF!"},
    // {name: 'Red-1', emoji: '🇲🇾 ', category: categories[0], price: 5.95},
    // {name: 'Red-2', emoji: '🇲🇾 ', category: categories[0], price: 6.95},
    // {name: 'Red-3', emoji: '🇲🇾 ', category: categories[0], price: 3.95},
    // {name: 'Orange-1', emoji: '🇲🇾 ', category: categories[1], price: 14.95},
    // {name: 'Orange-2', emoji: '🇲🇾 ', category: categories[1], price: 13.95},
    // {name: 'Orange-3', emoji: '🇲🇾 ', category: categories[1], price: 25.95},
    // {name: 'Yellow-1', emoji: '🇲🇾 ', category: categories[2], price: 1.95},
    // {name: 'Yellow-2', emoji: '🇲🇾 ', category: categories[2], price: 4.95},
    // {name: 'Yellow-3', emoji: '🇲🇾 ', category: categories[2], price: 3.95},
    // {name: 'Yellow-4', emoji: '🇲🇾 ', category: categories[2], price: 7.95},
    // {name: 'Yellow-5', emoji: '🇲🇾 ', category: categories[2], price: 1.95},
    // {name: 'Red-1', emoji: '🇲🇾 ', category: categories[0], price: 2.95},
    // {name: 'Red-2', emoji: '🇲🇾 ', category: categories[0], price: 3.95},
    // {name: 'Orange-4', emoji: '🇲🇾 ', category: categories[1], price: 1.95},
    // {name: 'Orange-5', emoji: '🇲🇾 ', category: categories[1], price: 0.95},
    // {name: 'Orange-6', emoji: '🇲🇾 ', category: categories[1], price: 2.95},
    // {name: 'Orange-7', emoji: '🇲🇾 ', category: categories[1], price: 3.95},
    // {name: 'Orange-8', emoji: '🇲🇾 ', category: categories[1], price: 0.95},
    // {name: 'Red-2', emoji: '🇲🇾 ', category: categories[0], price: 0.95},
    // {name: 'Red-3', emoji: '🇲🇾 ', category: categories[0], price: 8.95},
    // {name: 'Orange-8', emoji: '🇲🇾 ', category: categories[1], price: 3.95},
    // {name: 'Yellow-5', emoji: '🇲🇾 ', category: categories[2], price: 7.95},
  ]);

  console.log(items)

  process.exit();

})();