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

  // Dùng vòng lặp for để display tương ứng với số tháng
  for(let i = 0; i <= months; i++) {
    if(i === 0) {
      html = `
        <td>${i}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      `
    } else if(i === months) { // tháng cuối cùng tương ứng với số tháng
      // Gốc hàng tháng
      const originalPerMonth = loan - Math.round(loan / months) * (months - 1)
      // Lãi hàng tháng
      const interestPerMonth = interest - Math.round((loan * rate) / 1200) * (months - 1)
      // Gốc và lãi hàng tháng
      const originalAndInterestPerMonth = originalPerMonth + interestPerMonth
      html = `
        <td>${i}</td>
        <td></td>
        <td>${originalPerMonth}</td>
        <td>${interestPerMonth}</td>
        <td>${originalAndInterestPerMonth}</td>
        <td>0</td>
      `
    } else {  // các tháng ở giữa
      const originalPerMonth = Math.round(loan / months)
      const interestPerMonth = Math.round(loan * rate) / 1200
      const originalAndInterestPerMonth = originalPerMonth + interestPerMonth
      // Gốc còn lại
      const remainingOriginal = loan - originalPerMonth * i
      html = `
        <td>${i}</td>
        <td></td>
        <td>${originalPerMonth}</td>
        <td>${interestPerMonth}</td>
        <td>${originalAndInterestPerMonth}</td>
        <td>${remainingOriginal}</td>
      `
    }
    // Load dữ liệu vào bảng
    const tr = document.createElement('tr')
    tr.innerHTML = html
    document.querySelector('table tbody').appendChild(tr)
  }
})