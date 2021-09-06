/*
// 1. try...catch
try {
  alert('Bắt đầu chạy...')  // (1)
  hello
  alert('Dòng này không bao giờ chạy!') // (2)
} catch (err) {
  alert('Đã xảy ra lỗi!') // (3)
  // 1 và 3 sẽ được thực thi
}
*/

/*
// 2. try...catch chỉ hoạt động với runtime errors (lỗi thực thi code)
try {
  {{{{{{{{
} catch (e) {
  alert('Dòng này sẽ không được in ra!')
}
*/

/*
// 3. try...catch chỉ hoạt động đồng bộ
try {
  setTimeout(function () { // Đây là hàm bất đồng bộ setTimeout
    noSuchVariable  // Biến chưa được khai báo lỗi
  }, 1000)
} catch (e) {
  alert('Không hoạt động!')
}

// Cách để cho hàm bất đồng bộ chạy try...catch
setTimeout(function () {
  try {
    noSuchVariable
  } catch (error) {
    alert('Lỗi đã được bắt!')
  }
}, 2000)
*/

/*
// 4. Error Object: Khi xảy ra lỗi, JS sẽ tạo ra một object chứa thông tin về lỗi này
try {
  lalala
} catch (e) {
  console.log(e.name) // ReferenceError
  console.log(e.message)  // lalala is not defined
  console.log(e.stack)  // ReferenceError: lalala is not defined
  console.log(e)  // mặc định sẽ lấy thuộc tính 'stack'
}
*/

/* 5. Chủ động quăng lỗi với throw
  throw 'Lỗi'
  throw new Error('Lỗi')
  throw new SyntaxError('Lỗi')
  -> Nên dùng throw object dạng Error như Error, SyntaxError, ReferenceError
*/
try {
  throw new Error('Lỗi!!!')
} catch (error) {
  console.log(error)
}
console.log('-----------------------')

// 6. try...catch...finally

// Khi muốn luôn thực thi một đoạn code sau khi try..catch thì ta dùng finally
let loading1 = false
const getAPI = () => {
  try {
    loading1 = true
    get()
  } catch (error) {
    console.log(error)
  } finally {
    loading1 = false
  }
}
getAPI()
console.log('-----------------------')

// Dù có return trong try thì code trong finally vẫn hoạt động
let loading2 = false
const getAPI_2 = () => {
  try {
    loading2 = true
    return true
    get()
  } catch (error) {
    console.log(error)
  } finally {
    console.log('Finally')
  }
}
getAPI_2()
console.log('-----------------------')

// Biến khai báo bằng let/const trong block try không dùng được trong block catch hoặc finally
const getAPI_3 = () => {
  try {
    let message = 'Hello 123'
    console.log(message)
  } catch (error) {
    console.log(message)
  } finally {
    console.log(message)
  }
}
getAPI_3()