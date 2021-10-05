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


// F.Prototype mặc định, thuộc tính constructor
// Một object chỉ có thuộc tính duy nhất là constructor trỏ ngược lại chính function đó
function Rabbit_3() {

}
let rabbit_3 = new Rabbit_3()
console.log('-----------Default Prototype-----------')
console.log('Rabbit_3.prototype:', Rabbit_3.prototype)
console.log('Rabbit_3.prototype.constructor === Rabbit_3:', Rabbit_3.prototype.constructor === Rabbit_3)
console.log('rabbit_3.constructor === Rabbit_3:', rabbit_3.constructor === Rabbit_3)


// Chúng ta có thể sử dụng thuộc tính 'constructor' để tạo một object mới dựa trên object đã tồn tại
function Photo(color) {
  this.color = color
}
let photo = new Photo('green')
let photo_2 = new photo.constructor('blue')
console.log('Photo:', photo_2)


// Điều quan trọng về constructor là Javascript không đảm bảo constructor mà bạn cần
// Nếu thay thế constructor mặc định của function thì sẽ không còn constructor nữa
function Cat(name) {
  this.name = name
}
Cat.prototype = {
  eats: true
}
let cat = new Cat('White Cat')
console.log('------------Replace default constructor------------')
console.log(cat)


// Vậy nên để giữ đúng constructor, chúng ta có thể thêm hoặc xóa các thuộc tính thông qua thuộc tính prototype
function Dog(name) {
  this.name = name
}
Dog.prototype.eats = true // Không ghi đè lên Dog.prototype, chỉ thêm vào
let dog = new Dog('The black dog')
console.log('--------------Keep the constructor right--------------')
console.log('Dog:', dog)