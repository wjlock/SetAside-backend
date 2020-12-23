// imports
const express = require("express");
const router = express.Router();

// models
const models = require("../models");
const { model } = require("../models/User");

// GET api/expenses/test (Public)
router.get("/expensesTest", (req, res) => {
  res.json({ msg: "User endpoint OK!" });
});

// Find a user and then their expenses
router.get("/:id/myExpenses", (req, res) => {
  models.User.findOne({ _id: req.params.id })
    .then((user) => {
      res.send(user.expenses);
    })
    .catch((error) => res.send({ error }));
});

// get by Id
router.get("/:id", (req, res) => {
  // Needs work as well!!
  models.User.findOne({ _id: req.params.id})
  .then(user => {
    console.log(user.expenses)
    if ("user.expenses".includes(req.body.expenseId)){
      models.HomeExpense.findOne({ _id: req.body.expenseId})
      .then(foundExpense => {
        res.status(200).json({ foundExpense });
      })
 
    } else {
      res.send({msg: "User does not have that expense"})
    }
  })
    .catch((error) => res.send({ error }));
});

// POST api/expenses/new (Public)
router.post("/new", (req, res) => {
  models.User.findOne({ _id: req.body.id })
    .then((user) => {
      models.Expense.findOne({
        "category.name" : req.body.name,
      }).then((foundExpenseName) => {
        let expenseName = foundExpenseName.category.name

        if (expenseName === req.body.name) {
          // Can narrowed down further to narrow by category name and amount ect
          // Could say if category and name are equal to req.body category and name then that
          // expense already exist
          res.send({ msg: "expense already exist for this user" });
        } else {
          const newExpense = new models.Expense({
            category: req.body.category,
            "category.name": req.body.name,
            "category.amount": req.body.amount,
            "category.day": req.body.day,
            "category.month": req.body.month,
            "category.year": req.body.year
          });
          newExpense.save();
          user.expenses.push(newExpense);
          user.save();
          // res.status(201).json({ newExpense })
          res.send({ newExpense });
        }
      });
    })
    .catch((error) => res.send({ error }));
});

// // PUT route for expenses
router.put("/:id", (req, res) => {
  const { expense } = req.body
  models.Expense.update({
    _id: req.params.id
  }, {$set: {
      // Need to think about this, what's being updated what should remain the same using set
  }})
  .then((expense) => {
    res.status(201).json({ expense })
  })
  .catch((error) => res.send({ error }))
});

// // delete
// router.delete("/:id", (req, res) => {
//   models.Expense.deleteOne({ _id: req.params.id })
//     .then((expense) => res.status(201).json({ expense }))
//     .catch((error) => res.send({ error }));
// });

module.exports = router;
