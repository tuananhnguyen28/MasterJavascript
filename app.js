/* Singleton pattern là 1 object chỉ khởi tạo một lần duy nhất trong suốt chương trình
  chạy cho dù bạn có khởi tạo nó bao nhiêu lần đi nữa, nó giảm thiểu việc cấp phát bộ nhớ.
*/

const User = (function() {
  let instance
  function init() {
    return {
      name: 'Tuan',
      printName() {
        console.log(this.name)
      }
    }
  }
  return {
    getIntance() {
      if(!instance) { instance = init() }
      return instance
    }
  }
})()

const user1 = User.getIntance()
const user2 = User.getIntance()
user1.name = 'TuanUpdated'
console.log(user2)  // {name: 'TuanUpdated', printName: ƒ}
console.log(user1 === user2)  // true
// user1 và user2 giống nhau vì cả 2 đối tượng cùng trỏ đến cùng 1 ô địa chỉ (tránh lãng phí bộ nhớ)