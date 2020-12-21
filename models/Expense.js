const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Expense Schema
const expenseSchema = new Schema({
  home: {
    rent: {
      type: Number,
    },
    utilities: {
      water: {
        type: Number,
      },
      gas: {
        type: Number,
      },
      electric: {
        type: Number,
      },
    },
    phone: {
      type: Number,
    },
    internet: {
      type: Number,
    },
    insurance: {
      type: Number,
    },
    repairs: {
      type: Number,
    },
    landscaping: {
      type: Number,
    },
  },
  daily: {
    groceries: {
      type: Number,
    },
    childcare: {
      type: Number,
    },
    laundry: {
      type: Number,
    },
    restaurants: {
      type: Number,
    },
    housecleaning: {
      type: Number,
    },
    petcare: {
      type: Number,
    },
  },
  transportation: {
    gas: {
      type: Number,
    },
    carInsurance: {
      type: Number,
    },
    repairs: {
      type: Number,
    },
    cleaning: {
      type: Number,
    },
    parking: {
      type: Number,
    },
    publicTransport: {
      type: Number,
    },
    taxiOrUber: {
      type: Number,
    },
  },
  entertainment: {
    television: {
      type: Number,
    },
    movies: {
      type: Number,
    },
    concert: {
      type: Number,
    },
    miscellaneous: {
      Home: {
        Rent: {
          type: Number,
        },
        Utilities: {
          Water: {
            type: Number,
          },
          Gas: {
            type: Number,
          },
          Electric: {
            type: Number,
          },
        },
        Phone: {
          type: Number,
        },
        Internet: {
          type: Number,
        },
        Insurance: {
          type: Number,
        },
        Repairs: {
          type: Number,
        },
        Landscaping: {
          type: Number,
        },
      },
      Daily: {
        Groceries: {
          type: Number,
        },
        Childcare: {
          type: Number,
        },
        Laundry: {
          type: Number,
        },
        Restaurants: {
          type: Number,
        },
        Housecleaning: {
          type: Number,
        },
        Petcare: {
          type: Number,
        },
      },
      Transportation: {
        Gas: {
          type: Number,
        },
        CarInsurance: {
          type: Number,
        },
        Repairs: {
          type: Number,
        },
        Cleaning: {
          type: Number,
        },
        Parking: {
          type: Number,
        },
        PublicTransport: {
          type: Number,
        },
        TaxiOrUber: {
          type: Number,
        },
      },
      Entertainment: {
        Television: {
          type: Number,
        },
        Movies: {
          type: Number,
        },
        Concert: {
          type: Number,
        },
        Miscellaneous: {
          type: Number,
        },
      },
    },
  },
});

module.exports = Expense = mongoose.model("Expense", expenseSchema);
