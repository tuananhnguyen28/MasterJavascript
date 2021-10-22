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


/* 3. Ghi đè một phương thức
    - Mục đích không muốn thay thế phương thức của class cha
    - Dùng từ khóa super.method() để gọi phương thức cha
    - super(...) để gọi một constructor cha (bên trong constructor của chúng ta)
*/
class Person {
  constructor(name) {
    this.score = 0
    this.name = name
  }
  learn(score) {
    this.score = score
    console.log(`${this.name} reach ${this.score} score.`)
  }
  failure() {
    this.score = 0
    console.log(`${this.name} is failure.`)
  }
}
class Student extends Person {
  write() {
    console.log('The student is writing new lesson.')
  }
  failure() {
    super.failure() // call parent learn
    this.write()  // and then call write method
  }
}
let student = new Student('Student ABC')
console.log('----- Override one method -----')
student.learn(9)
student.failure()

// Arrow function không có super, nếu được truy cập -> nó sẽ lấy bên ngoài function, nghĩa là gọi method của parent class
class Teacher extends Person {
  teach() {
    console.log('The teacher is standing on the board.')
  }
  failure() {
    setTimeout(() => {
      super.failure()
    }, 1000)
  }
}
let teacher = new Teacher('Teacher BCD')
teacher.failure()


/*
  4. Ghi đè phương thức
    - Class con không có constructor, kế thừa từ class cha, 
    khi tạo 1 constructor trống, nó sẽ gọi 1 constructor và truyền các tham số vào
    - The syntax: tạo ra từ những class mà không có constructor của nó
    class Child extends Parent {
      constructor(...args) {
        super(...args)
      }
    }
*/
class Fruit {
  constructor(color) {
    this.taste = ''
    this.color = color
  }
}
class Orange extends Fruit {  // constructor trong class kế thừa phải gọi super(...) và làm điều này trước khi sử dụng this
  constructor(color, taste) {
    super(color)
    this.taste = taste
  }
}
let orange = new Orange('orange', 'sweet')
console.log('----- Override Constructor -----')
console.log(orange.color)
console.log(orange.taste)


/*
  Ghi đè các class field
    - Constructor cha luôn sử dụng giá trị (field) của nó, không phải từ kế thừa
    - Khi đối tượng của class kế thừa gọi super() -> constructor cha được gọi và ngay sau đó class field được khởi tạo
    - Tại thời điểm constructor cha thực thi, chưa có class field của class kế thừa
    - Ngoài ra, có thể fix bằng cách sử dụng các ph/thức (method) hoặc getter/setter thay vì trường (field)
*/
class Fruit_2 {
  name = 'Fruit_2'
  constructor() {
    this.name = this.name
  }
}
class Apple extends Fruit_2 {
  name = 'Apple'
}
console.log('----- Override Class Fields -----')
console.log('Fruit_2:', new Fruit_2().name)  // Fruit_2
console.log('Apple:', new Apple().name) // Apple