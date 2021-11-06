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