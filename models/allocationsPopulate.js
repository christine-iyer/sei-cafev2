require('dotenv').config()

const db = require('../config/database')
const Category = require('../models/category');
const Item = require('../models/item');


const categories = [
     { name: 'Cash-on hand', sortOrder:10 },
     { name: 'Accounts Receivable', sortOrder:20 },
     { name: 'Other Receivables', sortOrder:30 },
     { name: 'Due from Member', sortOrder:40 },
     { name: 'Inventory', sortOrder:50 },
     { name: 'Prepaid Expense', sortOrder:60 },
     { name: 'Other Current Assets', sortOrder:70 },
     { name: 'Machinery and Equipment', sortOrder:80 },
     { name: 'Furniture and Fixtures', sortOrder:90 },
     { name: 'Building and Improvements', sortOrder:100 },
     { name: 'Leasehold Improvements', sortOrder:110 },
     { name: 'Accumulated Depreciation', sortOrder:120 },
     { name: 'Intangible Assets', sortOrder:130 },
     { name: 'Accumulated Amortization', sortOrder:140 },
     { name: 'Accounts Payable-Trade', sortOrder:150 },
     { name: 'Credit Cards Payable', sortOrder:160 },
     { name: 'Sales Tax Payable-5.5%', sortOrder:170 },
     { name: 'Sales Tax Payable-8%', sortOrder:180 },
     { name: 'Accrued Expenses', sortOrder:190 },
     { name: 'Other Current Liabilites', sortOrder:200 },
     { name: 'Customer Deposits and Advances', sortOrder:210 },
     { name: 'Due to Member', sortOrder:220 },
     { name: 'Current Portion of LTD', sortOrder:230 },
     { name: 'Retained Earnings', sortOrder:240 },
     { name: 'Member Distribution', sortOrder:250 },
     { name: 'Accessories', sortOrder:260 },
     { name: 'Raw Oil', sortOrder:270 },
     { name: 'Candies', sortOrder:280 },
     { name: 'Topicals', sortOrder:290 },
     { name: 'Marshmallows', sortOrder:300 },
     { name: 'Raw Flowers', sortOrder:310 },
     { name: 'Tinctures', sortOrder:320 },
     { name: 'Gummies', sortOrder:330 },
     { name: 'Mix Edibles', sortOrder:340 },
     { name: 'Freight-out', sortOrder:350 },
     { name: 'Commission Income', sortOrder:360 },
     { name: 'Other Income', sortOrder:370 },
     { name: 'CGS-Direct Materials', sortOrder:380 },
     { name: 'CGS-Direct Labor', sortOrder:390 },
     { name: 'CGS-Indirect 1.471-11  c (2) (I)', sortOrder:400 },
     { name: 'CGS-Indirect 1.471-11  c (2) (III)', sortOrder:410 },
     { name: 'Salaries and Wages', sortOrder:420 },
     { name: 'Payroll Expenses Taxes', sortOrder:430 },
     { name: 'Workers Comp', sortOrder:440 },
     { name: 'Payroll Processing', sortOrder:450 },
     { name: 'Contract Labor', sortOrder:460 },
     { name: 'Training and Education', sortOrder:470 },
     { name: 'Selling & Marketing', sortOrder:480 },
     { name: 'Insurance Expense', sortOrder:490 },
     { name: 'Travel', sortOrder:500 },
     { name: 'Meals and Entertainment', sortOrder:510 },
     { name: 'Dues and Subscriptions', sortOrder:520 },
     { name: 'Office Supplies', sortOrder:530 },
     { name: 'Postage and Shipping', sortOrder:540 },
     { name: 'Consulting Expense', sortOrder:550 },
     { name: 'Accounting Fees', sortOrder:560 },
     { name: 'Legal Fees', sortOrder:570 },
     { name: 'Licensing', sortOrder:580 },
     { name: 'Rent', sortOrder:590 },
     { name: 'Property Tax', sortOrder:600 },
     { name: 'Depreciation Expense', sortOrder:610 },
     { name: 'Amortization Expense', sortOrder:620 },
     { name: 'Repairs and Maintenance', sortOrder:630 },
     { name: 'Utilities - Electric', sortOrder:640 },
     { name: 'Utilities - Heat', sortOrder:650 },
     { name: 'Utilities - Water', sortOrder:660 },
     { name: 'Utilites - Computer & Internet Exp', sortOrder:670 },
     { name: 'Utilities - Telephone Expense', sortOrder:680 },
     { name: 'Moving Expenses', sortOrder:690 },
     { name: 'Miscellaneous Expense', sortOrder:700 },
     { name: 'Ask CPA', sortOrder:710 },
     { name: 'Other Income Expense', sortOrder:720 },
];
const starterExpenses = [
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