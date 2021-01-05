// imports
const express = require("express");
const router = express.Router();
const passport = require("passport");

// models
const models = require("../models");
const { model } = require("../models/User");

// GET api/expenses/test (Public)
router.get("/expensesTest", (req, res) => {
  console.log("req.headers", req.headers);
  console.log("req.user", req.user);
  res.json({ msg: "User endpoint OK!" });
});

// Find a user and then their expenses
router.get(
  "/:id/myExpenses",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let expensesList = [];
    models.User.findOne({ _id: req.user.id })
      .populate("expenses")
      .then((user) => {
        console.log(user);
        res.send(user.expenses);
      })
      .catch((error) => res.send({ error }));
  }
);

// get by Id
router.get("/:id", (req, res) => {
  // Needs work as well!!
  models.User.findOne({ _id: req.user.id })
    .then((user) => {
      // console.log(user.expenses)
      if ("user.expenses".includes(req.body.expenseId)) {
        models.HomeExpense.findOne({ _id: req.body.expenseId }).then(
          (foundExpense) => {
            res.status(200).json({ foundExpense });
          }
        );
      } else {
        res.send({ msg: "User does not have that expense" });
      }
    })
    .catch((error) => res.send({ error }));
});

// POST api/expenses/new (Public)
router.post(
  "/new",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log(req.body);
    // console.log(req.headers.authorization)
    // console.log("req.user", req.user)
    models.User.findOne({ _id: req.user.id })
      .then((user) => {
        models.Expense.findOne({
          name: req.body.name,
          category: req.body.category,
        });
        const newExpense = new models.Expense({
          category: req.body.data.category,
          name: req.body.data.name,
          amount: req.body.data.amount,
          day: req.body.data.day,
          month: req.body.data.month,
          year: req.body.data.year,
        });
        newExpense.save();
        user.expenses.push(newExpense);
        user.save();
        res.send({ newExpense });
      })
      .catch((error) => res.send({ error }));
  }
);
// models.User.findOne({ _id: req.user.id })
//   .then((user) => {
//     models.Expense.findOne({
//       name: req.body.name,
//       category: req.body.category
//     }).then((foundExpense) => {
//       if (!foundExpense) {

//       }
//     })
//   })

// // PUT route for expenses
router.put("/:id", (req, res) => {
  // const { expense } = req.body
  models.Expense.findOneAndUpdate(
    { _id: req.params.id },
    {
      category: req.body.category,
      name: req.body.name,
      amount: req.body.amount,
      day: req.body.day,
      month: req.body.month,
      year: req.body.year,
    },
    (err, doc) => {
      if (err) {
        res.send({ msg: "Something went wrong in one of the fields" });
      } else {
        res.send({ newExpense });
      }
    }
  );
});

// delete
router.delete("/:id", (req, res) => {
  // Questions on if this is fine or if me and front end need to work together
  models.Expense.deleteOne({ _id: req.params.id })
    .then((expense) => res.status(201).json({ expense }))
    .catch((error) => res.send({ error }));
});

module.exports = router;
