// imports
const express = require('express');
const router = express.Router();

// models 
const db = require('../models');

// GET api/expenses/test (Public)
router.get('/expensesTest', (req, res) => {
    res.json({ msg: 'User endpoint OK!'});
});

// POST api/users/register (Public)
router.post('/', (req, res) => {
    models.Expense.create(req.body).then((expense) => {
      res.status(201).json({ expense })
    })
    .catch((error) => res.send({ error }))
});





module.exports = router;