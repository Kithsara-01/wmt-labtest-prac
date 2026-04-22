const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },   // ← NEW FIELD YOU ADD
    quantity: { type: Number, required: true }, // <- new added field
    category: { type: String, required: true }, // <- new added field
}, { timestamps: true });


module.exports = mongoose.model('Item', ItemSchema);