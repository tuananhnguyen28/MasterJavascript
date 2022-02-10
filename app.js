/*
  Observer pattern: là một design pattern nơi mà 1 object có nhiệm vụ duy trì 1 danh sách các object dựa vào nó.
  Tự động thông báo đến các object đó nếu có bất kỳ sự thay đổi nào về trạng thái
  (giống addEventListener bên javascript)
*/

class Subject {

  constructor() {
    this.observers = []
  }

  // Đăng ký function
  subscribe(func) {
    this.observers.push(func)
  }

  // Huỷ đăng ký function
  unsubscribe(func) {
    this.observers = this.observers.filter((observer) => observer !== func)
  }

  // Thông báo đến các function
  fire(data) {
    this.observers.forEach((observer) => observer(data))
  }

}

// Execute
const subject = new Subject()
function handle1(value) {
  console.log('Handle1', value)
}
function handle2(value) {
  console.log('Handle2', value)
}
subject.subscribe(handle1)
subject.subscribe(handle2)

subject.fire('Hello')

subject.unsubscribe(handle2)

subject.fire('Say goodbye')