const express = require('express')
const router = express.Router()

const Meal = require('../models/meal')

router.get('/add-meal', (req, res, next) => {
  res.render('add-meal', { title: 'Add Product Page' })
})

router.post('/add-meal', (req, res, next) => {
  const {name, type, price} = req.body
  const meal = new Meal(name, type, price)

  meal.store()
  res.redirect('/')
})


module.exports = router