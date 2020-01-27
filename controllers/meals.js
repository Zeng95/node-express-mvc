const Meal = require('../models/meal')

// Controller function
exports.getMeals = (req, res, next) => {
  Meal.fetchAll((meals) => {
    // Pass it the meals array to render (that's how you feed data into views)
    res.render('menu', {
      title: 'Menu Page',
      meals
    })
  })
}