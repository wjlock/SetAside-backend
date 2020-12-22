const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// HomeExpense Schema
const transportationExpenseSchema = new Schema({
    gas: {
        amount: { type: Number },
        day: { type: Number, required: true },
        month: { type: String, required: true },
        year: { type: Number, required: true },
      },
    carInsurance: {
        amount: { type: Number },
        day: { type: Number, required: true },
        month: { type: String, required: true },
        year: { type: Number, required: true },
      },
    carRepairs: {
        amount: { type: Number },
        day: { type: Number, required: true },
        month: { type: String, required: true },
        year: { type: Number, required: true },
      },
    cleaning: {
        amount: { type: Number },
        day: { type: Number, required: true },
        month: { type: String, required: true },
        year: { type: Number, required: true },
      },
    parking: {
        amount: { type: Number },
        day: { type: Number, required: true },
        month: { type: String, required: true },
        year: { type: Number, required: true },
      },
    publicTransport: {
        amount: { type: Number },
        day: { type: Number, required: true },
        month: { type: String, required: true },
        year: { type: Number, required: true },
      },
    taxiOrUber: {
        amount: { type: Number },
        day: { type: Number, required: true },
        month: { type: String, required: true },
        year: { type: Number, required: true },
      },
})
    

module.exports = TransportationExpense = mongoose.model("TransportationExpense", transportationExpenseSchema);
