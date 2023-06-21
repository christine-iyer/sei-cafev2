const { Schema, model } = require('mongoose')

const expenseSchema = new Schema({
    dateOfExpense: { type: Date, required: true },
    payee: {type: String},
    description: { type: String },
    use: {},//Used For
    itemQuantity: { type: Number },//# of Units
    unitMeasure: {type: String},//Meas.
    unitCost: {type: String}, //"Before T&S Amount"
    tax: { type: String },
    shipping: { type: Number },
    total: { type: Number },
    accountNumber: {type: String, required: true},
    allocationCode: [{type: Number, required: true}], //Stewart's accountNumber 
    allocationPercentage: {type: Number},
    category: [{type: String }], 
    barter: { type: Boolean },
    needsAllocation: { type: Boolean}
    
}, {
    timestamps: true
})


module.exports = model('Expense', expenseSchema)