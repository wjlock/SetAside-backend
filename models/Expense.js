const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Expense Schema
const expenseSchema = new Schema ({
    home: {
        rent: {
            type: Number
        },
        utilities: {
            water: {
                type: Number
            },
            gas: {
                type: Number
            },
            electric: {
                type: Number
            }
        },
        phone: {
            type: Number
        },
        internet: {
            type: Number
        },
        insurance: {
            type: Number
        },
        repairs: {
            type: Number
        },
        landscaping: {
            type: Number
        }
    },
    daily: {
        groceries: {
            type: Number
        },
        childcare: {
            type: Number
        },
        laundry: {
            type: Number
        },
        restaurants: {
            type: Number
        },
        housecleaning: {
            type: Number
        },
        petcare: {
            type: Number
        }
    },
    transportation: {
        gas: {
            type: Number
        },
        carInsurance: {
            type: Number
        },
        repairs: {
            type: Number
        },
        cleaning: {
            type: Number
        },
        parking: {
            type: Number
        },
        publicTransport: {
            type: Number
        },
        taxiOrUber: {
            type: Number
        }
    },
    entertainment: {
        television: {
            type: Number
        },
        movies: {
            type: Number
        },
        concert: {
            type: Number
        },
        miscellaneous: {
            type: Number
        }
    }
})


module.exports = Expense = mongoose.model('Expense', expenseSchema);