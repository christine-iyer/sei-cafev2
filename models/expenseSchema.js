const { Schema, model } = require('mongoose')

const expenseSchema = new Schema({
    dateOfExpense: { type: Date, required: true },
    payee: {type: String},
    description: { type: Number },
    use: {},//Used For
    itemQuantity: { type: Number },//# of Units
    unitMeasure: {type: String},//Meas.
    unitCost: {type: String}, //"Before T&S Amount"
    tax: { type: String },
    shipping: { type: String },
    total: {},
    accountNumber: {type: Number, required: true},//Account #
    barter: { type: Boolean },
    
}, {
    timestamps: true
})


module.exports = model('Expense', expenseSchema)