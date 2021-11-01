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
console.log(new CoffeeMachine_2().setWaterAmount(100))