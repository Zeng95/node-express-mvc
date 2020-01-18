const meals = [
  { name: "MilkShake", type: "breakfast", price: 8 },
  { name: "Lazanya", type: "lunch", price: 20 },
  { name: "Roast Lamb", type: "dinner", price: 50 }
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