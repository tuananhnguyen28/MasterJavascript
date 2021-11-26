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


