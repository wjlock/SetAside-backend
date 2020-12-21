const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Expense Schema
const expenseSchema = new Schema ({
    Home: {
        Rent: {
            type: Number
        },
        Utilities: {
            Water: {
                type: Number
            },
            Gas: {
                type: Number
            },
            Electric: {
                type: Number
            }
        },
        Phone: {
            type: Number
        },
        Internet: {
            type: Number
        },
        Insurance: {
            type: Number
        },
        Repairs: {
            type: Number
        },
        Landscaping: {
            type: Number
        }
    },
    Daily: {
        Groceries: {
            type: Number
        },
        Childcare: {
            type: Number
        },
        Laundry: {
            type: Number
        },
        Restaurants: {
            type: Number
        },
        Housecleaning: {
            type: Number
        },
        Petcare: {
            type: Number
        }
    },
    Transportation: {
        Gas: {
            type: Number
        },
        CarInsurance: {
            type: Number
        },
        Repairs: {
            type: Number
        },
        Cleaning: {
            type: Number
        },
        Parking: {
            type: Number
        },
        PublicTransport: {
            type: Number
        },
        TaxiOrUber: {
            type: Number
        }
    },
    Entertainment: {
        Television: {
            type: Number
        },
        Movies: {
            type: Number
        },
        Concert: {
            type: Number
        },
        Miscellaneous: {
            type: Number
        }
    }
})


module.exports = Expense = mongoose.model('Expense', expenseSchema);