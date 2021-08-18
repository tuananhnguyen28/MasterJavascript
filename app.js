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
*/


