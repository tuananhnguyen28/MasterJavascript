/*
  Được dùng để mở rộng chức năng của một object mà không phải thay đổi class hoặc 
    constructor function hiện có.
*/

// Ex1
function Car(name) {
  this.name = name
  this.color = 'White'
}
// Tạo mới object
const tesla = new Car('testla demo')
// Thêm tính năng mới vào object mà không làm thay đổi constructor function
tesla.setColor = function(color) {
  this.color = color
}
tesla.setPrice = function(price) {
  this.price = price
}
tesla.setColor('Black')
tesla.setPrice('120000$')
console.log('----- The information of tesla -----')
console.log(tesla)  // Car {name: 'testla demo', color: 'Black', price: '120000$', setColor: ƒ, setPrice: ƒ}

/* Ex2: apply Decorator Pattern into reality (get other object in video)
  1. Tạo class cơ bản là House cho việc tạo House object
  2. Tạo các decorator function cho các tính năng mà muốn thêm vào House object
  3. Override 'cost' function để return về giá trị tiền dựa vào từng đặc điểm của nhà
*/
class House {
  constructor() {
    // Default Cost
    this.cost = function() {
      return 100000
    }
  }
}
// Decorator function
function HouseLevel1(house) {
  house.HouseLevel1 = true
  const prevCost = house.cost()
  house.cost = function() {
    return prevCost + 5000
  }
}
function HouseLevel2(house) {
  house.HouseLevel2 = true
  const prevCost = house.cost()
  house.cost = function() {
    return prevCost + 10000
  }
}
function HouseLevel3(house) {
  house.HouseLevel3 = true
  const prevCost = house.cost()
  house.cost = function() {
    return prevCost + 20000
  }
}
// How to execute
const house = new House()
console.log('----- The reality example about decorator pattern -----')
console.log('----- The original value of house -----')
console.log(house.cost())
console.log('----- The money of HouseLevel1 -----')
HouseLevel1(house)
console.log(house.cost())
console.log('----- The money of HouseLevel2 -----')
HouseLevel2(house)
console.log(house.cost())
console.log('----- The money of HouseLevel3 -----')
HouseLevel3(house)
console.log(house.cost()) //135000
// Lưu ý: tuỳ vào tính năng hiện tại của house mà được cộng dồn lên theo giá tiền (cộng dồn theo level)