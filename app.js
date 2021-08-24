// Bắt sự kiện submit của form
document.querySelector('form').addEventListener('submit', event => {

  event.preventDefault()

  // Mỗi lần click vào button 'Tính Toán Khoản Vay' thì clear table ở bên dưới để load ra dữ liệu mới
  document.querySelector('table tbody').innerHTML = ''

  // Tiền gốc vay
  const loan = Number(document.getElementById('loan').value)

  // Thời hạn vay
  const months = Number(document.getElementById('months').value)

  // Lãi suất
  const rate = Number(document.getElementById('rate').value)

  // Ngày Giải Ngân
  const disbursementDate = document.getElementById('disbursementDate').value

  // Tổng Số Tiền Lãi
  const interest = Math.round((loan * months * rate) / 1200)

  // Tổng Gốc Và Lãi Phải Trả
  const originalAndInterest = loan + interest

  // Fill kết quả vào 2 textbox readonly
  document.getElementById('interest').value = interest.toLocaleString()
  document.getElementById('originalAndInterest').value = originalAndInterest.toLocaleString()

})