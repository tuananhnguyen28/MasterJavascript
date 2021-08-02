// Popup: bao gồm Alert, Confirm, Prompt

/*
// alert: thông báo cho người dùng về một việc gì đó, người dùng phải nhấn 'OK' để hoàn thành quá trình
alert('Hello')
*/

/*
// confirm: để xác nhận người dùng có chấp nhận làm một điều gì đó. confirm() sẽ return về giá trị boolean
const isConfirmed = confirm('Bạn có muốn xóa form này không?')
if(isConfirmed) {
  alert('Bạn đã xóa thành công!')
}
else {
  alert('Bạn đã xóa không thành công!')
}
*/

// prompt: muốn người dùng nhập vào một giá trị và bạn sẽ dùng giá trị đó để thực hiện một hành động gì đó
const value1 = prompt('Nhập giá trị đầu tiên', 0)
const value2 = prompt('Nhập giá trị thứ 2', 0)
alert(`Kết quả ${value1} + ${value2} = ${Number(value1) + Number(value2)}`)