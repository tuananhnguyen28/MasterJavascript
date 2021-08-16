// onkeydown-keydown: thực thi khi người dùng ấn một phím (tất cả phím)
function onKeyDown() {
  document.getElementById('name1').addEventListener('keydown', (event) => {
    console.log(event.target.value) // sẽ bị chậm một nhịp khi log value
  })
}


// onkeypress-keypress: cũng như onkeydown nhưng một số phím ko hiệu lực (Alt, Ctrl, Shift, Esc)
document.getElementById('name2').addEventListener('keypress', (event) => {
  console.log(event.target.value) // sẽ bị chậm một nhịp khi log value
})


// onkeyup-keyup: thực thi khi người dùng nhả 1 phím
document.getElementById('name3').addEventListener('keyup', (event) => {
  console.log(event.target.value)
})


// oninput-input: thực thi khi value của input hay textarea thay đổi
document.getElementById('name4').addEventListener('input', (event) => {
  console.log(event.target.value)
})


/* 
  onchange-change
    - input, textarea thì thực thi value thay đổi và mất focus
    - radiobutton và checkbox, onchange thực thi ở trạng thái thay đổi.
*/
// input-textarea
document.getElementById('name5').addEventListener('change', (event) => {
  console.log(event.target.value)
})
// radiobutton