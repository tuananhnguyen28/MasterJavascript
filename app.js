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


// 2. In "extends", it use 'prototype' mechanism
console.log('-----PrototypeMechanism-----')
console.log(rabbit)

/* 
  Cú pháp được chấp nhận: class kế thừa function và return về 1 class trong function đó (1)
  Điều này sẽ hữu dụng khi muốn kế thừa dựa vào điều kiện nào đó (2)
*/
// Exp (1)
function f(phrase) { 
  return class {
    sayHi() {
      console.log(phrase)
    }
  }
}
class User_1 extends f('Hello function f') {}
new User_1().sayHi()  // Hello function f
// Apply (2)
function makeClass(type) {
  if(type === 0) {
    return class {
      sayHi() {
        console.log('Hello makeClass.')
      }
    }
  }
  return class {
    sayBye() {
      console.log('Say bye makeClass.')
    }
  }
}
class User_2 extends makeClass(1) {}
console.log('-----Return class contains sayBye if the condition equal 1-----')
new User_2().sayBye()
class User_3 extends makeClass(0) {}
console.log('-----Return class contains sayBye if the condition equal 0-----')
new User_3().sayHi()