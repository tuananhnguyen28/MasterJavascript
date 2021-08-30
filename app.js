// Chứa thông tin 3 tùy chọn
const VALUES = [
  { id: 'scissors', value: '✌️' },
  { id: 'rock', value: '✊' },
  { id: 'paper', value: '🖐' }
]

// Chạy random
let i = 0
const handleChange = () => {
  const computer = document.getElementById('computer')
  computer.textContent = VALUES[i].value
  computer.dataset.id = VALUES[i].id
  if(i === VALUES.length - 1) {
    i = 0
  }
  else {
    i++
  }
}
let interval = setInterval(handleChange, 100)

// Hàm so sánh 2 giá trị của user và computer
const compare = (user, computer) => {
  const indexUser = VALUES.findIndex(item => item.id === user)
  const indexComputer = VALUES.findIndex(item => item.id === computer)
  const check = indexUser - indexComputer
  if([1, -2].includes(check)) { return 1 }
  else if([-1, 2].includes(check)) { return -1 }
  else { return 0}
}

// Thêm sự kiện click vào kéo/búa/bao
document.querySelectorAll('.user').forEach(btn => {

  btn.addEventListener('click', (event) => {
    clearInterval(interval)
    event.target.classList.add('active')

    // lấy giá trị của computer khi click vào button kéo/búa/bao
    const valueComputer = document.getElementById('computer').dataset.id

    // lấy giá trị của user
    const valueUser = event.target.id

    const result = compare(valueUser, valueComputer)
    const alert = document.createElement('div')
    alert.classList.add('alert', 'text-center')
    let message = ''
    if(result === 1) { 
      message = 'Bạn đã chiến thắng!' 
      alert.classList.add('alert-success')
    }
    else if(result === -1) { 
      message = 'Bạn đã thua cuộc!'
      alert.classList.add('alert-dark')
    }
    else { 
      message = 'Bạn đã hòa!'
      alert.classList.add('alert-warning')
    }
    alert.textContent = message
    document.getElementById('notification').appendChild(alert)

    // Hiển thị nút trở lại khi có get được message
    document.getElementById('play-again').classList.remove('d-none')

    // Ngăn người dùng không thể click vào các button còn lại
    document.querySelectorAll('.user').forEach(_btn => {
      _btn.style.pointerEvents = 'none'
    })

  })
})

// Play Again
document.querySelector('.btn-play-again').addEventListener
('click', () => {
  // Computer start change
  interval = setInterval(handleChange, 100)
  // User can click
  document.querySelectorAll('.user').forEach(_btn => {
    _btn.style.pointerEvents = ''
  })
  // Reset Notification
  document.getElementById('notification').innerHTML = ''
  // Reset active button
  document.querySelector('.user.active').classList.remove('active')
  // Hide play-again button
  document.getElementById('play-again').classList.add('d-none')
})