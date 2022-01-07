// Using Async-Await

class FastHttp {
  async send(method, url, body) {
    const data = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body : body ? JSON.stringify(body) : undefined
    })
    return data.json()
  }
  get(url) {
    return this.send('GET', url)
  }
  post(url, body) {
    return this.send('POST', url, body)
  }
  put(url, body) {
    return this.send('PUT', url, body)
  }
  delete(url) {
    return this.send('DELETE', url)
  }
}

const http = new FastHttp()
const baseURL = 'https://61d5a36e2b4f730017a82974.mockapi.io/users'

// // Dùng function async bao ngoài
// window.addEventListener('DOMContentLoaded', async () => {
//   try {
//     const data = await http.get(baseURL)
//     console.log(data)
//   } catch (error) {
//     console.log('Error: ', error)
//   }
// })

// // Dùng IIEF
// ;(async () => {
//   try {
//     const data = await http.get(baseURL)
//     console.log(data)
//   } catch (error) {
//     console.log('Error: ', error)
//   }
// })()

// // Post
// ;(async () => {
//   try {
//     const data = await http.post(baseURL, { name: 'John John John' })
//     console.log(data)
//   } catch (error) {
//     console.log(error)
//   }
// })()

// // Put
// ;(async () => {
//   try {
//     const data = await http.put(`${baseURL}/3`, { name: 'Doc Co Cau Bai' })
//     console.log(data)
//   } catch (error) {
//     console.log(error)
//   }
// })()

// Put
;(async () => {
  try {
    const data = await http.delete(`${baseURL}/4`)
    console.log(data)
  } catch (error) {
    console.log(error)
  }
})()