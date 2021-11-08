/*
  1. Bài về con trỏ this
  class Car {
    constructor(name) {
      this.name = name
    }
    print() {
      setTimeout(function () {
        // Làm sao để có thể truy cập đến thuộc tính name tại đây
      }, 1000)
    }
  }
*/

// Giải
class Car1 {
  constructor(name) {
    this.name = name
  }
  print() {
    setTimeout(() => {
      console.log(this.name)
    }, 1000)
  }
}
console.log('----- 1. The exercise about this point -----')
new Car1('BMW').print()

// Hoặc
class Car2 {
  constructor(name) {
    this.name = name
  }
  print() {
    setTimeout(function() {
      console.log(this.name)
    }.bind(this), 1000)
  }
}
new Car2('Mercedes').print()


/*
  2. Có class Rabbit kế thừa Animal. Đoạn code dưới đây không thể tạo đối tượng Rabbit, vì sao và sửa nó.
  class Animal {
    constructor(name) {
      this.name = name
    }
  }
  class Rabbit extends Animal {
    constructor(name) {
      this.name = name
      this.created = Date.now()
    }
  }
  let rabbit = new Rabbit('White Rabbit') // Error: this is not defined
  alert(rabbit.name)
*/

// Giải
class Animal {
  constructor(name) {
    this.name = name
  }
}
class Rabbit extends Animal {
  constructor(name) {
    super(name)
    this.created = Date.now()
  }
}
let rabbit = new Rabbit('White Rabbit')
console.log('----- 2.The case could not create object from child/derived class -----')
console.log(rabbit.name)


/*
  3. Tạo một class ExtendedClock kế thừa Clock và thêm độ chính xác của tham số - 
  số mili giây giữa các lần in. Mặc định là 1000 mili giây. Lưu ý không sửa đổi class Clock.

  class Clock {
  constructor({ template }) {
    this.template = template
  }
  render() {
    let date = new Date()
    let hours = date.getHours()
    if(hours < 10) hours = '0' + hours
    let minutes = date.getMinutes()
    if(minutes < 10) minutes = '0' + minutes
    let seconds = date.getSeconds()
    if(seconds < 10) seconds = '0' + seconds
    let output = this.template
      .replace('h', hours)
      .replace('m', minutes)
      .replace('s', seconds)
    console.log(output)
  }
  stop() {
    clearInterval(this.timer)
  }
  start() {
    this.render()
    this.timer = setInterval(() => this.render(), 1000)
  }
}
const clock = new Clock({ template: 'h:m:s' })
clock.start()

*/

// Giải
class Clock {
  constructor({ template }) {
    this.template = template
  }
  render() {
    let date = new Date()
    let hours = date.getHours()
    if(hours < 10) hours = '0' + hours
    let minutes = date.getMinutes()
    if(minutes < 10) minutes = '0' + minutes
    let seconds = date.getSeconds()
    if(seconds < 10) seconds = '0' + seconds
    let output = this.template
      .replace('h', hours)
      .replace('m', minutes)
      .replace('s', seconds)
    console.log(output)
  }
  stop() {
    clearInterval(this.timer)
  }
  start() {
    this.render()
    this.timer = setInterval(() => this.render(), 1000)
  }
}

class ExtendedClock extends Clock {
  constructor({ template, precision = 1000 }) {
    super({ template })
    this.precision = precision
  }
  start() {
    this.render()
    this.timer = setInterval(() => this.render(), this.precision)
  }
}

const clock = new ExtendedClock({ template: 'h:m:s', precision: 500 })
console.log('----- 3. Edit contents in derived class but no change parent class -----')
clock.start()


/*
  4. Tất cả các đối tượng thường kế thừa từ Object.prototype và có quyền truy cập vào các
    ph/thức đối tượng "generic" như hasOwnProperty
    => Xem thêm giải thích trong phần 4 này (phần bài tập và lý thuyết)
*/

// Exp1:
class Rabbit_1 {
  constructor(name) {
    this.name = name
  }
}
console.log('----- Object prototype (Inherit) -----')
let rabbit_1 = new Rabbit_1('Rabbit 1') // hasOwnProperty method is from Object.prototype
console.log(rabbit_1.hasOwnProperty('name'))  // true

// Exp2:
class Rabbit_2 extends Object {
  constructor(name) {
    super() // need to call the parent constructor when inheriting
    this.name = name
  }
}
let rabbit_2 = new Rabbit_2('Rabbit 2')
console.log(rabbit_2.hasOwnProperty('name'))  // true


/*
  5. Trong đoạn mã dưới đây, tại sao instanceof trả về true? Ta có thể dễ dàng thấy rằng a không được tạo bởi B().
    
  function A() {}
  function B() {}
  A.prototype = B.prototype = {}
  let a = new A()
  alert(a instanceof B) // true

*/

// Giải thích
// instanceof không quan tâm đến function, cái instanceof quan tâm là thuộc tính prototype của function. 
// Và ở đây a.__proto__ == B.prototype, vì thế instanceof return true. 
// Vậy nên về mặt logic của instanceof, prototype mới là thứ định nghĩa type, chứ không phải constructor function