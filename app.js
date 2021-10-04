/*
  Một object mới có thể được tạo với 1 constructor function, như là new F() (1)
  Nếu F.prototype là một object, thì dùng new sẽ sử dụng nó để set Prototype cho object mới (2)
*/

// (1)
// Constructor Function
function Car(name, price) {
  this.name = name,
  this.price = price
}
const car = new Car('BMW', 200000)
console.log(car)
console.log('------------------------')
// prototype (thuộc tính của function hoặc object) !== [[Prototype]] (thuộc tính ẩn)


// (2)
let animal = {
  eats: true
}

function Rabbit(name) {
  this.name = name
}

Rabbit.prototype = animal
let rabbit = new Rabbit('White Rabbit') // rabbit.__proto__ == animal
console.log(rabbit)
console.log(rabbit.eats)  // đối tượng rabbit sẽ truy xuất vào prototype của nó (eats: true)
console.log('------------------------')


/*
  Nếu gán lại (hoặc thêm vào) thuộc tính prototype cho Function thì những object mà đã tạo từ
  constructor function sẽ vẫn giữ nguyên [[Prototype]] của nó,
  chỉ những object được tạo sau đó mới có [[Prototype]] mới.
*/
const animal_2 = {
  eats: true
}
const human_2 = {
  talks: true
}
function Rabbit_2(name) {
  this.name = name
}
Rabbit_2.prototype = animal_2
const rabbit_1 = new Rabbit_2('White Rabbit 2') // rabbit_1.__proto__ == animal
Rabbit_2.prototype = human_2
console.log(rabbit_1)
const rabbit_2 = new Rabbit_2('Black Rabbit 2') // object được tạo sau mới có [[Prototype]] mới
console.log(rabbit_2)
console.log('------------------------')