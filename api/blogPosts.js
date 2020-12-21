// imports
const express = require('express');
const router = express.Router();

// models 
const db = require('../models');

// all blog posts
router.get('/all', (req, res) => {
    models.BlogPost.find().then((foundBlogPosts) => {
      res.status(200).json({ blogPosts: foundBlogPosts })
    })
    .catch((error) => res.send({ error }))
})

// get by Id
router.get('/:id', (req, res) => {
    models.BlogPost.findOne({_id: req.params.id}).then((blogPost) => {
      res.status(200).json({ blogPost })
    })
    .catch((error) => res.send({ error }))
})

// POST api/comments/new (Public)
router.post('/new', (req, res) => {
    models.BlogPost.create(req.body).then((blogPost) => {
      res.status(201).json({ blogPost })
    })
    .catch((error) => res.send({ error }))
});

// PUT route for expenses
router.put('/:id', (req, res) => { 
    const { blogPost } = req.body
    models.BlogPost.update({
      _id: req.params.id
    }, {$set: {
        comments
    }})
    .then((blogPost) => {
      res.status(201).json({ blogPost })
    })
    .catch((error) => res.send({ error }))
});

// delete
router.delete('/:id', (req, res) => {
    models.BlogPost.deleteOne({ _id: req.params.id })
    .then((blogPost) => res.status(201).json({ blogPost }))
    .catch((error) => res.send({ error }))
})


module.exports = router;