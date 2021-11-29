/* Promise ES6
  Là lời hứa, trong tương lai có thể làm hoặc không làm một hành động gì đó (thất hứa)
  Một Promise có 3 trạng thái:
    - pending: đang chờ kết quả
    - fulfilled: đã có kết quả
    - rejected: lỗi xảy ra
*/

// Tạo một Promise
const p = new Promise(function(resolve, reject) {
  resolve(1)  // Or: resolve({})
})
console.log('Kiểu dữ liệu:', typeof p)  // Object đặc biệt, object Promise
p.then(value => {
  console.log('Giá trị của resolve:', value)  // 2
})

const e = new Promise(function(resolve, reject) {
  reject('Đã bị lỗi!!!')
}).catch(error => {
  console.log('Giá trị của reject:', error)  // Đã bị lỗi!!!
})


// Chuyển một async callback thành một promise
// async callback thông thường (sau 1s)
setTimeout(() => {
  console.log('Hello async callback after 1 second!')
}, 1000)
// chuyển thành promise (sau 2s)
const c_to_p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hello promise after 2 seconds!')
  }, 2000)
})
c_to_p.then(value => { console.log(value)} )


// Một số lưu ý khi dùng Promise
// 1.1 Promise thực thi khi khai báo, chứ không phải là khi dùng then() -> sử dụng then() chỉ lấy kết quả
let a = 1
const operate_when_declaring = new Promise((resolve, reject)=> {
  a++
})
console.log('Promise thực thi khi khai báo, a =', a)
// => Cách khắc phục: đưa Promise vào một function
let b = 1
const fixed_operate_when_declaring = () => {
  new Promise((resolve, reject) => {
    b++
  })
}
console.log('Promise sau khi được đưa vào 1 function, b =', b)
fixed_operate_when_declaring()
console.log('Kết quả sau khi muốn tăng giá trị bằng sử dụng function hoặc then(), b =', b)