// // Module Pattern
// const map = (function () {
//   // Private variable
//   const toaDo = [12.424232, 19.9934431]
//   // Private function
//   function layToaDo() {
//     return toaDo
//   }
//   return {
//     // Public function
//     inToaDo: function() {
//       console.log(layToaDo())
//     }
//   }
// })()

// Revealing Module: khi Public function nhiều, phần 'return' trả về rất nhiều dòng nên có thể dùng cách này
const map = (function () {
  // Private variable
  const toaDo = [12.424232, 19.9934431]
  // Private function
  function layToaDo() {
    return toaDo
  }
  function inToaDo() {
    console.log(layToaDo())
  }
  return {
    // Public function
    inToaDo
  }
})()