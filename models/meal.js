const meals = [
  { name: "MilkShake", type: "breakfast", price: 8, className: 'list-group-item-danger' },
  { name: "Lazanya", type: "lunch", price: 20, className: 'list-group-item-warning' },
  { name: "Roast Lamb", type: "dinner", price: 50, className: 'list-group-item-info' }
]

class Meal {
  constructor(name, type, price) {
    this.name = name
    this.type = type
    this.price = price
  }

  store() {
    meals.push(this)
  }

  static fetchAll() {
    return meals
  }
}

module.exports = Meal