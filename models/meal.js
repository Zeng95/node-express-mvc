const fs = require('fs')
const path = require('path')

const meals = [
  { name: "MilkShake", type: "breakfast", price: 8, className: 'list-group-item-danger' },
  { name: "Lazanya", type: "lunch", price: 20, className: 'list-group-item-warning' },
  { name: "Roast Lamb", type: "dinner", price: 50, className: 'list-group-item-info' }
]

class Meal {
  constructor(name = '', type = '', price = '') {
    this.name = name
    this.type = type
    this.price = price
  }

  store() {
    const p = path.join(__basedir, 'data', 'meals.json')

    fs.readFile(p, (err, data) => {
      let meals

      // 如果 meals.json 存在
      if (!err) {
        meals = JSON.parse(data)
      } else {
        meals = []
      }

      meals.push(this)
      fs.writeFile(p, JSON.stringify(meals), (err) => {
        if (err) throw err
        console.log('The file has been saved!')
      })
    })
  }

  // Meal 类自身的方法
  static fetchAll() {
    return meals
  }
}

module.exports = Meal