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