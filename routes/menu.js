const express = require('express')
const router = express.Router()

const mealsController = require('../controllers/meals')

/* GET menu page. */
router.get('/', mealsController.getMenu)

module.exports = router