// Property getters and setters

/*
  Có 2 thuộc tính object:
    - Thuộc tính dữ liệu
    - Thuộc tính bộ truy cập (accessor properties)
*/

// Getter and Setter example
let user = {
  name: 'Joihdr',
  surname: 'Smith',
  get fullName() {
    return `${this.name} ${this.surname}`
  },
  set fullName(value) {
    ;[this.name, this.surname] = value.split(' ')
  } 
}

// set fullName được thực thi với giá trị được gán phía dưới, nó là thuộc tính ảo
user.fullName = 'Alice Copper'
console.log(user) // -> gọi set fullName
console.log(user.fullName)  // -> gọi get fullName


// Accessor descriptors - bộ mô tả của bộ truy cập 
// (không có value và writable, nhưng lại có thêm get và set function)
console.log(Object.getOwnPropertyDescriptor(user, 'fullName'))


// Với một object được tạo sẵn, có thể tạo getter và setter thông qua defineProperty
let car = {
  brand: 'Toyota',
  color: 'white'
}
Object.defineProperty(car, 'fullBrand', {
  get() {
    return `${this.brand} ${this.color}`
  },
  set(value) {
    ;[this.brand, this.color] = value.split(' ')
  }
})
console.log(car)
console.log(car.fullBrand)

// Liệt kế ra các key
for(const key in car) console.log(key)


// getters/setters thông minh
const person = {
  get name() {
    return this._name // trả về một name ảo
  },
  set name(value) {
    if(value.length < 4) {
      console.log('Tên không được nhỏ hơn 4 ký tự')
      return
    }
    this._name = value
  }
}
person.name = 'Huy'
console.log(person)