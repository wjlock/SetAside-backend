// imports
const express = require("express");
const router = express.Router();

// models
const models = require("../models");

// GET api/expenses/test (Public)
router.get("/expensesTest", (req, res) => {
  res.json({ msg: "User endpoint OK!" });
});

// // Find a user and then their expenses
// router.get("/:id/myExpenses", (req, res) => {
//   models.User.findOne({ _id: req.params.id })
//     .then((user) => {
//       // res.status(201).json({ user })
//       res.send(user.expenses);
//     })
//     .catch((error) => res.send({ error }));
// });

// // get by Id
// router.get("/:id", (req, res) => {
//   models.Expense.findOne({ _id: req.params.id })
//     .then((expense) => {
//       res.status(200).json({ expense });
//     })
//     .catch((error) => res.send({ error }));
// });

// POST api/expenses/new (Public)
router.post("/additionalexpense", (req, res) => {
  models.User.findOne({ _id: req.body.id })
    .then((user) => {
      models.AdditionalExpense.findOne({
        "expense.name": req.body.expenseName,
      }).then((foundExpense) => {
        if (foundExpense) {
          res.send({ msg: "expense already exist for this user" });
        } else {
          const newExpense = new models.AdditionalExpense({
            "expense.name": req.body.expenseName,
            "expense.amount": req.body.amount,
          });
          newExpense.save();
          user.additionalExpenses.push(newExpense);
          user.save();
          // res.status(201).json({ newExpense })
          res.send({ newExpense });
        }
      });
    })
    .catch((error) => res.send({ error }));
});

router.post("/new", (req, res) => {
  // let expenseName = req.body.expenseName
  let values = req.body.amount
  models.User.findOne({ _id: req.body.id })
  .then(user => {
    const newExpense = new models.Expense({
      "daily.grocieries" : values,
      "home.rent" : values
    })
  })
})

// // PUT route for expenses
// router.put("/:id", (req, res) => {
//   const {
//     home,
//     rent,
//     utilities,
//     water,
//     gasUtility,
//     electric,
//     phone,
//     internet,
//     insurance,
//     homeRepairs,
//     landscaping,
//     daily,
//     groceries,
//     childcare,
//     laundry,
//     restaurants,
//     housecleaning,
//     petcare,
//     transportation,
//     gas,
//     carInsurance,
//     carRepairs,
//     cleaning,
//     parking,
//     publicTransport,
//     taxiOrUber,
//     entertainment,
//     television,
//     movies,
//     concert,
//     miscellaneous,
//   } = req.body;
//   models.Expense.update(
//     {
//       _id: req.params.id
//     },
//     {
//       $set: {
//         home,
//         rent,
//         utilities,
//         water,
//         gasUtility,
//         electric,
//         phone,
//         internet,
//         insurance,
//         homeRepairs,
//         landscaping,
//         daily,
//         groceries,
//         childcare,
//         laundry,
//         restaurants,
//         housecleaning,
//         petcare,
//         transportation,
//         gas,
//         carInsurance,
//         carRepairs,
//         cleaning,
//         parking,
//         publicTransport,
//         taxiOrUber,
//         entertainment,
//         television,
//         movies,
//         concert,
//         miscellaneous,
//       },
//     }
//   )
//     .then((expense) => {
//       res.status(201).json({ expense });
//     })
//     .catch((error) => res.send({ error }));
// });

// // delete
// router.delete("/:id", (req, res) => {
//   models.Expense.deleteOne({ _id: req.params.id })
//     .then((expense) => res.status(201).json({ expense }))
//     .catch((error) => res.send({ error }));
// });

module.exports = router;
