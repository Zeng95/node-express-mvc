const fs = require('fs')
const path = require('path')

const p = path.join(__basedir, 'data', 'meals.json')

const getMealsFromFile = (callback) => {
  // 异步代码
  fs.readFile(p, (err, data) => {
    let meals

    // 如果 meals.json 存在
    if (!err) {
      meals = JSON.parse(data)
    } else {
      meals = []
    }

    callback(meals)
  })
}

class Meal {
  constructor(name = '', type = '', price = '') {
    this.name = name
    this.type = type
    this.price = price
  }

  store() {
    const storeMealToFile = (meals) => {
      meals.push(this)
      fs.writeFile(p, JSON.stringify(meals), (err) => {
        if (err) throw err
        console.log('The file has been saved!')
      })
    }

    getMealsFromFile(storeMealToFile)
  }

  // Meal 类自身的方法
  static fetchAll(callback) {
    getMealsFromFile(callback)
  }
}

module.exports = Meal