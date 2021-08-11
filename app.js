// Sẽ return về 2 trường hợp HTML Collection và Node List

// HTML Collection
let labelHTMLCollection = document.getElementsByTagName('label')
labelHTMLCollection = document.getElementsByClassName('form-group')
console.log(labelHTMLCollection)
console.log(labelHTMLCollection[0])
for(let i = 0; i < labelHTMLCollection.length; i++) {
  labelHTMLCollection[i].style.color = 'yellow'
}


/*
  - Node List: phương thức querySelectorAll() sẽ return về 1 Node List object
  - Trong khi HTML Collection chỉ chứa danh sách các thẻ HTML thì Node List có thể chứa các thẻ html, text, 
  hoặc comment.
  - Node List object sẽ có những phương thức mà HTML Collection object không có
*/
let labelNodeList = document.querySelectorAll('label')  // hoặc ('form .form-group')
console.log(labelNodeList)
labelNodeList.forEach(item => {
  item.style.color = "blue"
})