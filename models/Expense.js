const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// User Schema
const expenseSchema = new Schema({
  expense: {
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    day: { type: Number, required: true },
    month: { type: String, required: true },
    year: { type: Number, required: true}
  },
});

module.exports = Expense = mongoose.model(
  "Expense",
  ExpenseSchema
);
