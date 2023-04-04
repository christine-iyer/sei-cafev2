require('dotenv').config()

const db = require('../config/database')
const Category = require('../models/category');
const Item = require('../models/item');


const categories = [
    { name: 'Raw Flower', sortOrder: 10 },
    { name: 'Gummies', sortOrder: 20 },
    { name: 'Candies', sortOrder: 30 },
    { name: 'Tinctures-Base Oil', sortOrder: 40 },
    { name: 'Topicals', sortOrder: 50 },
    { name: 'Marshmallows', sortOrder: 60 },
];
const starterItems = [
     { name: "R4", emoji: "oz", category: categories[0], price: 16.99 },
     { name: "ACDC", emoji: "oz", category: categories[0], price: 16.99 },
     { name: "MW", emoji: "oz", category: categories[0], price: 16.99 },
     { name: "DD", emoji: "oz", category: categories[0], price: 16.99 },
     { name: "MW/DHDS", emoji: "oz", category: categories[0], price: 16.99 },
     { name: "LemD", emoji: "oz", category: categories[0], price: 16.99 },
     { name: "Sativa", emoji: "oz", category: categories[0], price: 16.99 },
     { name: "Indica", emoji: "oz", category: categories[0], price: 16.99 },
     { name: "Cotton candy", emoji: "oz", category: categories[0], price: 16.99 },
     { name: "Cheese", emoji: "oz", category: categories[0], price: 16.99 },
     { name: "Lilac diesel", emoji: "oz", category: categories[0], price: 16.99 },
     { name: "Citral glue", emoji: "oz", category: categories[0], price: 16.99 },
     { name: "Sleep CBG", emoji: "1 oz per pack-packs", category: categories[1], price: 42.99 },
     { name: "Sleep CBD/ACDC", emoji: "1 oz per pack-packs", category: categories[1], price: 42.99 },
     { name: "Sleep Indica", emoji: "1 oz per pack-packs", category: categories[1], price: 42.99 },
     { name: "Lift", emoji: "1 oz per pack-packs", category: categories[1], price: 42.99 },
     { name: "Recovery", emoji: "1 oz per pack-packs", category: categories[1], price: 42.99 },
     { name: "Daytime CBG", emoji: "1 oz per pack-packs", category: categories[1], price: 42.99 },
     { name: "CBD/CBN", emoji: "oz", category: categories[2], price: 42.99 },
     { name: "Lemongrass", emoji: "oz", category: categories[2], price: 31.99 },
     { name: "Watermelon", emoji: "oz", category: categories[2], price: 31.99 },
     { name: "Woe", emoji: "oz", category: categories[2], price: 31.99 },
     { name: "CBG", emoji: "oz", category: categories[2], price: 31.99 },
     { name: "Indica glycerin", emoji: "oz", category: categories[3], price: 31.99 },
     { name: "Sativa", emoji: "oz", category: categories[3], price: 44.99 },
     { name: "Union custom", emoji: "oz", category: categories[3], price: 44.99 },
     { name: "CBN MCT", emoji: "oz", category: categories[3], price: 44.99 },
     { name: "Chaga", emoji: "oz", category: categories[3], price: 44.99 },
     { name: "Garden of Bloom", emoji: "oz", category: categories[4], price: 44.99 },
     { name: "Garden of Peace", emoji: "oz", category: categories[4], price: 44.99 },
     { name: "Lip Lover", emoji: "oz", category: categories[4], price: 44.99 },
     { name: "Massage Oil Cream", emoji: "oz", category: categories[4], price: 44.99 },
     { name: "No 10", emoji: "oz", category: categories[4], price: 24.99 },
     { name: "Therapeutic Touch", emoji: "oz", category: categories[4], price: 24.99 },
     { name: "Soaps", emoji: "each", category: categories[4], price: 24.99 },
     { name: "TLC Cream Small", category: categories[4], emoji: "oz", price: 24.99 },
     { name: "TLC Cream Large", emoji: "oz", category: categories[4], price: 24.99 },
     { name: "Bath Balms sm", emoji: "oz", category: categories[4], price: 24.99 },
     { name: "Bath Balms lg", emoji: "oz", category: categories[4], price: 24.99 },
     { name: "Indica", emoji: "each", category: categories[5], price: 24.99 },
     { name: "Sative", emoji: "each", category: categories[5], price: 24.99 },
     { name: "CBG", emoji: "each", category: categories[5], price: 24.99 }
]


Item.deleteMany({})
    .then(() => {
      Item.create(starterItems)
        .then((createdItems) => {
            console.log('created Items:', createdItems)
            db.close()
        })
        .catch(err => {
            console.log(err)
            db.close()
        })  
    }).catch(err => {
        console.log(err)
        db.close()
    })