/*
  Internal and external interface
  Có 2 loại thuộc tính và phương thức trong Javascript
    - Public: có thể truy cập bất kỳ đâu, nghĩa là external interface. Cho đến bây giờ
    thì chúng ta chỉ sử dụng thuộc tính public.
    - Private: có thể truy cập bên trong class, nghĩa là internal interface
*/


/* 
  1. Readonly
    Chúng ta tạo thuộc tính power là read-only tức là có thể get chứ không thể set
*/
class CoffeeMachine {
  constructor(power) {
    this._power = power
  }
  get power() {
    return this._power
  }
}
// Create the coffee machine
let coffeeMachine = new CoffeeMachine(100)
console.log('----- 1. Readonly -----')
console.log(`Power is ${coffeeMachine.power}W`)
// Can't set for read-only
coffeeMachine.power = 25
console.log(`Power is ${coffeeMachine.power}W`) // Power is 100W
// coffeeMachine._power chỉ nên sử dụng bên trong class, không ở ngoài class


/*
  2. Getter/setter functions
    - Nó trông dài hơn nhưng function thì đa năng hơn, bạn có thể truyền nhiều tham số.
    - Cú pháp get/set thì ngắn hơn, nhưng nó có quy tắc bị giới hạn bởi tham số truyền vào
*/
class CoffeeMachine_2 {
  _waterAmount = 0
  
  setWaterAmount(value) {
    if(value < 0) value = 0
    else {
      this._waterAmount = value
    }
  }

  getWaterAmount() {
    return this._waterAmount
  }
}
console.log('----- Getter/setter functions -----')
const coffeeMachine_2 = new CoffeeMachine_2()
// coffeeMachine_2.getWaterAmount()
coffeeMachine_2.setWaterAmount(101.5)
console.log(coffeeMachine_2)


/*
  3. Private: 
    (1): Được bắt đầu bằng # và chỉ có thể truy cập bên trong class
    (2): Các trường private không bị xung đột với các trường public, có thể khai báo private
    #waterAmount và public waterAmount cùng 1 lúc
*/

// (1)
class SoftDrink {

  // Private field, Private property
  #waterLimit = 200
  
  // Private method 
  #fixWaterAmount(value) {
    if(value < 0) return 0
    if(value > this.#waterLimit) return this.#waterLimit
  }

  // Public method
  setWaterAmount(value) {
    this.#waterLimit = this.#fixWaterAmount(value)
  }
}
console.log('----- Private -----')

// let softDrink = new SoftDrink()
// // Can't access privates from outside of the class
// console.log(softDrink.#waterLimit)  // Error
// softDrink.#fixWaterAmount(95) // Error

// Invoke public property or method
let softDrink_2 = new SoftDrink()
softDrink_2.setWaterAmount(300)
console.log(softDrink_2)

// (2)
class Fruit {

  #waterAmount = 0

  get waterAmount() {
    return this.#waterAmount
  }

  set waterAmount(value) {
    if(value < 0) value = 0
    this.#waterAmount = value
  }
}
let fruit = new Fruit()
fruit.waterAmount = 100
// console.log(fruit.#waterAmount) // Error

// Nếu kế thừa từ Fruit, thì sẽ không thể truy cập vào #waterAmount
class Other_Fruit extends Fruit {
  method() {
    // console.log(this.#waterAmount)  // Error: can only access from Fruit
  }
}