// imports
const express = require('express');
const router = express.Router();

// models 
const db = require('../models');

// GET api/expenses/test (Public)
router.get('/expensesTest', (req, res) => {
    res.json({ msg: 'User endpoint OK!'});
});


// all expenses
router.get('/myExpenses', (req, res) => {
    models.Expense.find().then((foundExpenses) => {
      res.status(200).json({ expenses: foundExpenses })
    })
    .catch((error) => res.send({ error }))
})

// get by Id
router.get('/:id', (req, res) => {
    models.Expense.findOne({_id: req.params.id}).then((expense) => {
      res.status(200).json({ expense })
    })
    .catch((error) => res.send({ error }))
})

// POST api/expenses/new (Public)
router.post('/new', (req, res) => {

    models.Expense.create(req.body).then((expense) => {
      res.status(201).json({ expense })
    })
    .catch((error) => res.send({ error }))
});


// PUT route for expenses
router.put('/:id', (req, res) => { 
    const { home, rent, utilities, water, gasUtility, electric, phone, internet, insurance, homeRepairs, landscaping, daily, groceries, childcare, laundry, restaurants, housecleaning, petcare, transportation, gas, carInsurance, carRepairs, cleaning, parking, publicTransport, taxiOrUber, entertainment, television, movies, concert, miscellaneous } = req.body
    models.Expense.update({
      _id: req.params.id
    }, {$set: {
        home, 
        rent, 
        utilities, 
        water, 
        gasUtility, 
        electric, 
        phone, 
        internet, 
        insurance, 
        homeRepairs, 
        landscaping, 
        daily, 
        groceries, 
        childcare, 
        laundry, 
        restaurants, 
        housecleaning, 
        petcare, 
        transportation, 
        gas, 
        carInsurance, 
        carRepairs, 
        cleaning, 
        parking, 
        publicTransport, 
        taxiOrUber, 
        entertainment, 
        television, 
        movies, 
        concert, 
        miscellaneous
    }})
    .then((expense) => {
      res.status(201).json({ expense })
    })
    .catch((error) => res.send({ error }))
})
  
// delete
router.delete('/:id', (req, res) => {
    models.Expense.deleteOne({ _id: req.params.id })
    .then((expense) => res.status(201).json({ expense }))
    .catch((error) => res.send({ error }))
})



module.exports = router;