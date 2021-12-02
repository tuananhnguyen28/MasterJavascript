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