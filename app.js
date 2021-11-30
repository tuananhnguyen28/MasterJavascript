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


// 1.2 Một Promise chỉ có thể rơi vào 1 trong 3 trạng thái, sau khi thực hiện resolve() hay reject(), nếu có code 
// phía dưới thì code vẫn được chạy, muốn không chạy code dưới thì dùng return (kết thúc một function)
const one_in_three = new Promise((resolve, reject) => {
  return resolve('done for resolve.')
  console.log('Đã chạy resolve.')
  reject(new Error('error'))
})
one_in_three.then(value => {
  console.log(value)
}).catch(error => {
  console.log(error)
})

// 1.3.1 then/catch luôn return về một promise
const always_return_one_promise = new Promise((resolve, reject) => {
  reject('Lỗi rồi đó (always_return_one_promise)!')
})
always_return_one_promise.then(value => {}, error => {
  console.log(error)
  return 1 // return về 1 promise ở dòng này
}).then(value => {
  console.log('value', value)
})

// 1.3.2 return giá trị trong onFulfilled / onRejected sẽ đưa giá trị đó về trạng thái onFullfilled ở promise tiếp theo
const onFullfilled_to_onFullfilled = new Promise((resolve, reject) => {
  resolve('Resolve lỗi rồi ')
})
onFullfilled_to_onFullfilled.then(value => {
  return value + 'bạn ơi'
}).then(value => {
  console.log('value', value)
})

// 1.3.3 'throw' giá trị trong executor / onFullfilled / onReject sẽ đưa giá trị đó về trạng thái onRejected ở promise tiếp theo,
// quăng lỗi vào catch
const _throw = new Promise((resolve, reject) => {
  throw 'Lỗi throw '
})
_throw.catch(error => { throw error + 'bạn throw ơi!' 
}).catch(error => { console.log(error) })

// Cách tạo nhanh promise/reject
const fast_promise = Promise.resolve(1)
const fast_reject = Promise.reject(2)
console.log('fast_promise ', fast_promise)
console.log('fast_reject ', fast_reject)