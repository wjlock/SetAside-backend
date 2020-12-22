const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// HomeExpense Schema
const entertainmentExpenseSchema = new Schema({
    television: {
        amount: { type: Number },
        day: { type: Number, required: true },
        month: { type: String, required: true },
        year: { type: Number, required: true },
      },
    movies: {
        amount: { type: Number },
        day: { type: Number, required: true },
        month: { type: String, required: true },
        year: { type: Number, required: true },
      },
    concert: {
        amount: { type: Number },
        day: { type: Number, required: true },
        month: { type: String, required: true },
        year: { type: Number, required: true },
      },
    miscellaneous: {
        amount: { type: Number },
        day: { type: Number, required: true },
        month: { type: String, required: true },
        year: { type: Number, required: true },
      },
});

module.exports = EntertainmentExpense = mongoose.model("EntertainmentExpense", entertainmentExpenseSchema);