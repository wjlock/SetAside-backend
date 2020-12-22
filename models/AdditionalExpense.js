const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// User Schema
const additionalExpenseSchema = new Schema({
  expense: {
    name: { type: String, required: true },
    amount: { type: Number, required: true },
  },
});

module.exports = AdditionalExpense = mongoose.model(
  "AdditionalExpense",
  additionalExpenseSchema
);
