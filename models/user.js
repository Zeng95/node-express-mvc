// 类
class User {
  constructor(name) {
    this.name = name
  }

  sayHi() {
    alert(this.name)
  }
}
// 实例
const user = new User('John')
