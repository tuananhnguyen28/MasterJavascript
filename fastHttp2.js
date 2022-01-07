// Using Promise type

class FastHttp {
  send(method, url, body) {
    return fetch(url, {
      method, 
      headers: {
        'Content-Type': 'application/json'
      }, 
      body : body ? JSON.stringify(body) : undefined
    }).then(res => res.json())
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

// Execute 'GET'
http.get(baseURL).then(data => {
  console.log(data)
}).catch(error => {
  console.log('Error', error)
})

// // Execute 'POST'
// http.post(baseURL, { name: 'Nguyen Anh Tuan' })
// .then(data => {
//   console.log(data)
// })
// .catch(error => {
//   console.log('Error', error)
// })

// // Execute 'PUT'
// http.put(`${baseURL}/3`, { name: 'Nguyen Anh Tuan 3Upt' })
// .then(data => {
//   console.log(data)
// })
// .catch(error => {
//   console.log('Error', error)
// })

// // Execute 'DELETE'
// http.delete(`${baseURL}/2`)
// .then(data => {
//   console.log(data)
// })
// .catch(error => {
//   console.log('Error', error)
// })