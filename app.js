// Object window
var hacker = 'Tuan' // không thể khai báo bằng từ khoá let/const
console.log('document:', hacker)
console.log('window.document:', window.hacker) // do window có thuộc tính hacker nên có thể gán giá trị cho nó

/*
// window.thuộc tính còn áp dụng cho function
var hacker = function() {
    return 1
}
console.log(window.hacker())
*/

// document.getElementById === window.document.getElementById

// Một số phương thức của window object
console.log('---- Một số phương thức của window object -----')
/*
window.innerWidth // chiều rộng của cửa sổ hiện tại, có thể là kích thước responsive trên nền web
window.innerHeight // chiều cao của cửa sổ hiện tại
*/

// Mở một tab mới/cửa sổ trình duyệt mới
// window.open('','','width=100', 'height=100')

// Đóng một tab/cửa sổ hiện tại
// window.close()

// Thay đổi kích thước cửa sổ
/*
let myWindow = window.open('','','width=100','height=100')
myWindow.resizeTo(300, 400)
*/


/*
    Window location: là một object có thể được sử dụng để lấy thông tin địa chỉ url hiện tại
    và chuyển hướng trình duyệt sang trang mới
        window.location.href    // return url hiện tại
        window.location.hostname    // return tên domain
        window.location.pathname    // return pathname của trang hiện tại (/index.html)
        window.location.protocol    // return giao thức trang web (http: hoặc https)
        window.location.assign('https://www.google.com')    // chuyển hướng sang một trang mới được chỉ định
        window.location.href = 'https://www.google.com'     // tương tự assign()
*/


/*
    Window Navigator: thông tin trình duyệt của người dùng
        navigator.language
        console.log(navigator)
*/


/* 
    Window History: object chứa lịch sử của trình duyệt
        history.back(): trở về trang trước
        history.forward(): trở về trang sau
    Cách áp dụng: truy cập google.com -> search từ khoá zing -> back/forward
*/
