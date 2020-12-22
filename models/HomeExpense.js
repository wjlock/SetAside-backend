const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// HomeExpense Schema
const homeExpenseSchema = new Schema({
  rent: {
    amount: { type: Number },
    day: { type: Number, required: true },
    month: { type: String, required: true },
    year: { type: Number, required: true },
  },
  utilities: {
    water: {
      amount: { type: Number },
      day: { type: Number, required: true },
      month: { type: String, required: true },
      year: { type: Number, required: true },
    },
    gasUtility: {
      amount: { type: Number },
      day: { type: Number, required: true },
      month: { type: String, required: true },
      year: { type: Number, required: true },
    },
    electric: {
      amount: { type: Number },
      day: { type: Number, required: true },
      month: { type: String, required: true },
      year: { type: Number, required: true },
    },
  },
  others: {
    phone: {
        amount: { type: Number },
        day: { type: Number, required: true },
        month: { type: String, required: true },
        year: { type: Number, required: true },
      },
      internet: {
        amount: { type: Number },
        day: { type: Number, required: true },
        month: { type: String, required: true },
        year: { type: Number, required: true },
      },
      insurance: {
        amount: { type: Number },
        day: { type: Number, required: true },
        month: { type: String, required: true },
        year: { type: Number, required: true },
      },
      homeRepairs: {
        amount: { type: Number },
        day: { type: Number, required: true },
        month: { type: String, required: true },
        year: { type: Number, required: true },
      },
      landscaping: {
        amount: { type: Number },
        day: { type: Number, required: true },
        month: { type: String, required: true },
        year: { type: Number, required: true },
      },
  }
});

module.exports = HomeExpense = mongoose.model("HomeExpense", homeExpenseSchema);
