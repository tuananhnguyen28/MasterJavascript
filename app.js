const card = document.querySelector('.card')
console.log(card)
/*
  console.log(card.children)  // return HTMLCollection
  console.log(card.childNodes)  // return NodeList (bao gồm các text rỗng)
  console.log(card.parentElement) // <div class="container">
  console.log(card.nextElementSibling)  // div thứ 2: <div class="card mb-3 p-2">
  console.log(card.nextElementSibling.children[1])  // <p>Tôi tên là Nguyễn</p>
  console.log(card.nextElementSibling.previousElementSibling) // div đầu tiên
  console.log(card.nextElementSibling.lastElementChild) // <p>Tôi tên là Nguyễn</p>
  console.log(card.nextElementSibling.firstElementChild)  // <h2>Hi</h2>
  console.log(card.nextElementSibling.firstChild) // text đầu tiên trước <h2>Hi</h2>
*/

/*
  Có thể DOM trực tiếp trên browser/F12 -> Tab Element
  Right click vào element cần DOM -> chọn "Store as global variable"
  Ví dụ: temp1.style.color = 'blue' để chỉnh sửa màu cho element được chọn
*/
