// Meal model
const Meal = require('../models/meal')

exports.getMenu = (req, res, next) => {
  const meals = Meal.fetchAll()
  // Pass it the meals array to render (that's how you feed data into views)
  res.render('menu', {
    title: 'Menu',
    meals
  })
}