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
// use req.user
router.post("/new", (req, res) => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  console.log("users", req.user)
=======
  console.log(req.body)
>>>>>>> 446b3b8c1b46184d4ae2b3bed0eb126d9153b3e0
=======
  console.log(req.body)
>>>>>>> 446b3b8c1b46184d4ae2b3bed0eb126d9153b3e0
=======
>>>>>>> 13421fed058acbe68a1550603b5892bda22d6daf
  models.User.findOne({ _id: req.body.id })
    .then((user) => {
      models.Expense.findOne({
        name : req.body.name,
        category: req.body.category
      }).then((foundExpense) => {
        console.log(user.expenses)
        console.log(foundExpense)
        // console.log(`ObjectId("${foundExpense._id}")`)
        console.log(user.expenses.includes(`ObjectId("${foundExpense._id}")`))
        if (user.expenses.includes(`ObjectId("${foundExpense._id}")`)) {
          res.send({ msg: "expense already exist for this user" });
        } else {
          const newExpense = new models.Expense({
            category: req.body.category,
            name: req.body.name,
            amount: req.body.amount,
            day: req.body.day,
            month: req.body.month,
            year: req.body.year
          });
          newExpense.save();
          user.expenses.push(newExpense);
          user.save();
          res.send({ newExpense });
        }
    })
  })
    .catch((error) => res.send({ error }));
});

// // PUT route for expenses
router.put('/:id', (req, res) => { 
  // const { expense } = req.body
  models.Expense.findOneAndUpdate(
    {_id: req.params.id}, 
    {category: req.body.category, 
      name: req.body.name, 
      amount: req.body.amount, 
      day: req.body.day, 
      month: req.body.month, 
      year: req.body.year}, (err, doc) => {
        if (err) {
          res.send({ msg: "Something went wrong in one of the fields" });
        } else {
          res.send({ newExpense });
        }
      }
    )}
);

// // delete
// router.delete("/:id", (req, res) => {
//   models.Expense.deleteOne({ _id: req.params.id })
//     .then((expense) => res.status(201).json({ expense }))
//     .catch((error) => res.send({ error }));
// });

module.exports = router;
