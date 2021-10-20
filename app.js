// 1. "extends" key
class Animal {
  constructor(name) {
    this.speed = 0
    this.name = name
  }
  run(speed) {
    this.speed = speed
    console.log(`${this.name} runs with speed ${this.speed}`)
  }
  stop() {
    this.speed = 0
    console.log(`${this.name} stans still.`)
  }
}

let animal = new Animal('My animal')

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides!`)
  }
}

let rabbit = new Rabbit('White Rabbit')
console.log('-----Invoke the methods of parent class from child class-----')
rabbit.run(5)
rabbit.hide()

// Lưu ý: Object của class Rabbit có thể truy cập được các ph/thức bên trong Rabbit cũng như Animal