// Imports
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const passport = require('passport');
require('./config/passport')(passport);
const PORT = process.env.PORT || 8000;

// API
const users = require('./api/users');
const expenses = require('./api/expenses')
const investments = require('./api/investments')

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Initialize Passport and use config file
app.use(passport.initialize());
require('./config/passport')(passport);

// Home route
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Smile, you are being watched by the Backend Engineering Team' });
});

// Routes
app.use('/api/users', users);
app.use('/api/expenses', expenses);
app.use('/api/investments', investments);


app.listen(PORT, () => {
    console.log(`Server is listening 🎧 on port: ${PORT}`);
});