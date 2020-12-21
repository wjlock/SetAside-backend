const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const investmentsSchema = new Schema ({
    Name: {
        type: String,
        required: true
    },
    Amount: {
        type: Number
    }
})


module.exports = Investments = mongoose.model('Investments', investmentsSchema);