const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// HomeExpense Schema
const dailyExpenseSchema = new Schema({
    groceries: {
        amount: { type: Number },
        day: { type: Number, required: true },
        month: { type: String, required: true },
        year: { type: Number, required: true },
      },
    childcare: {
        amount: { type: Number },
        day: { type: Number, required: true },
        month: { type: String, required: true },
        year: { type: Number, required: true },
      },
    laundry: {
        amount: { type: Number },
        day: { type: Number, required: true },
        month: { type: String, required: true },
        year: { type: Number, required: true },
      },
    restaurants: {
        amount: { type: Number },
        day: { type: Number, required: true },
        month: { type: String, required: true },
        year: { type: Number, required: true },
      },
    housecleaning: {
        amount: { type: Number },
        day: { type: Number, required: true },
        month: { type: String, required: true },
        year: { type: Number, required: true },
      },
    petcare: {
        amount: { type: Number },
        day: { type: Number, required: true },
        month: { type: String, required: true },
        year: { type: Number, required: true },
      },
})
    

module.exports = DailyExpense = mongoose.model("DailyExpense", dailyExpenseSchema);
