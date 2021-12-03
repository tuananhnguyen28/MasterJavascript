/*
// 1. Async function: luôn luôn return 1 promise

async function handle1() {
  return 'handle1'
}

// function handle() { // old: using promise
//   return Promise.resolve(1)
// }

handle1().then(value => { console.log(value) })
*/

/*
// 2. Await: chỉ hoạt động bên trong sync function

const getAPI = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(100)
    }, 3000)
  })
}

const handle2 = async () => {
  console.log('First value:', 1)
  let value = 0
  value = await getAPI()  // chờ cho hàm getAPI chạy xong mới chạy tiếp dòng code bên dưới (101 -> 100)
  console.log('Second value:', 1 + value)
  return value
}

handle2().then(value => { console.log(value) })
*/


/*
// 3. Xử lý lôi với async/await
const getAPI = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Lỗi rồi bạn ơi!!!'))
    }, 1000)
  })
}

const getUser = async () => {
  try {
    const value = await getAPI()
    return value
  } catch (error) {
    console.log(error)
    return null
  }
}

getUser()
// Nếu muốn lấy luôn giá trị trả về thì execute thêm .then()
getUser().then(value => { console.log(value) })
*/


// 4. Đừng bao giờ kết hợp các toán tử đồng bộ với async/await
// let x = 0
// async function r5() {
//   x += 1
//   console.log(x)
//   return 5
// }
// (async () => {
//   x += await r5()  // x ở dòng này ko được tăng lên
//   console.log(x)
// })()
// // 1
// // 5
// Cách sửa lại:
let x = 0
async function r5() {
  x += 1
  console.log(x)
  return 5
}
(async () => {
  const y = await r5()
  x += y
  console.log(x)
})()
// 1
// 6


// 5. Gọi tuần tự với async await: tối ưu bằng Promise.all()
const getBooks = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(['Programming', 'Design'])
    }, 2000)
  })
}
const getUsers = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(['John', 'Mask', 'Leon'])
    }, 3000)
  })
}
const getAPI = async () => {
  // Destructuring
  const [books, users] = await Promise.all([getBooks(), getUsers()])
  return { books, users }
}
getAPI().then(value => { console.log(value)} )