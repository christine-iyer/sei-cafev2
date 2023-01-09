const {Schema, model} = require('mongoose')

const itemSchema = new Schema({
    name: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    unitCost: { type: Number, required: true, default: 0 },
    quantity: { type: Number, required: true, default: 1 },
    taxable: Boolean,
    barter: Boolean,
    sku: { type: String, required: true }
}, {
    timestamps:true
})

module.exports = itemSchema
