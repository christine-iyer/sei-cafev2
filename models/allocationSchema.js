const { Schema, model } = require('mongoose')

const allocationSchema = new Schema({
    code: { type: String, required: true },
    category: { type: String, required: true },
    allocation: { type: String, required: true }
    
}, {
    timestamps: true
})


module.exports = model('Allocation', allocationSchema)