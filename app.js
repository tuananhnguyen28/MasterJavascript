// 1. Cookie: cho phép bạn lưu trữ thông tin người dùng website vào máy tính của bạn

/* Coding:
  // tạo cookie
  document.cookie = 'username=Tuan Nguyen'
  document.cookie = 'password=123456@123'
*/

/* Coding:
  // thêm thời gian hết hạn (dạng UTC)
  const date = new Date(2021, 8, 18).toString()
  document.cookie = `username=Nguyen Tuan; expires=${date}; path=/`
*/

/* Coding:
  // xóa một cookie, chỉ cần set thời gian hết hạn (01 Jan 1970)
  document.cookie = `username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
  console.log(document.cookie)
*/

/*
  - Nếu set 1 cookie mới, tất cả các cookie cũ sẽ không bị thay thế, cookie mới sẽ được thêm vào document.cookie
  - Cookie đc lưu theo trang web. Vd đang ở xdevclass.com thì không thể truy cập đến cookie của trang google.com được 
  lưu trên máy bạn.
  - Thường dùng cookie với thư viện js-cookie
  - Nếu không truyền giá trị của expires thì mặc định thời gian hết hạn sẽ trong session
*/


// 2. Local Storage: tương tự Cookie, là một web API giúp bạn lưu data website vào máy tính, tồn tại mãi mãi cho đến khi bị xóa

// thêm item
localStorage.setItem('name', 'NguyenTuan')
localStorage.setItem('age', '28')

// đọc item
const name = localStorage.getItem('name')
console.log('localStorage for name:', name)

// xóa item
localStorage.removeItem('name')
const nameAfterRemoving = localStorage.getItem('name')
console.log('localStorage after removing:', nameAfterRemoving)

/*
  // xóa hết localStorage
  localStorage.clear()
*/

// Lưu ý: khi lưu localStorage, khi dùng method 'getItem' sẽ luôn trả về kiểu string
localStorage.setItem('gender', 1)
console.log(typeof localStorage.getItem('gender'))

/*
  Cách chuyển từ một string -> chuỗi đặc biệt (object dạng string)
  Mục đích để lưu vào localStorage, vì localStorage chỉ lưu data dạng string
*/
const profile = {
  name: 'Tuan', 
  age: 28,
  gender: 'male'
}

const profileJson = JSON.stringify(profile)
console.log(profileJson)
console.log(typeof profileJson)

// Chuyển chuỗi đặc biệt về lại object
const profileObject = JSON.parse(profileJson)
console.log(profileObject)
console.log(typeof profileObject)

// Lưu chuỗi 'object dạng string' vào localStorage
// Khi click vào value trên tab Application/Local Storage có thể thấy được tất cả properties của object
localStorage.setItem('profile', profileJson)