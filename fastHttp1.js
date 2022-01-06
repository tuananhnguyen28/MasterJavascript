// RESRful API là gì

// Tạo với 3 cơ chế: callback, promise và async await
function FastHttp() {
  this.xhr = new XMLHttpRequest()
}

FastHttp.prototype.send = function(method, url, body, callback) {
  this.xhr.onreadystatechange = function() {
    if(this.readyState === 4) {
      if(this.status === 200 || this.status === 201) {
        callback(null, JSON.parse(this.responseText))
      } else {
        callback(this.responseText)
      }
    }
  }
  this.xhr.open(method, url, true)
  this.xhr.setRequestHeader('Content-Type', 'application/json')
  this.xhr.send(body ? JSON.stringify(body) : null)
}

FastHttp.prototype.get = function(url, callback) {
  this.send('GET', url, null, callback)
}

FastHttp.prototype.post = function(url, body, callback) {
  this.send('POST', url, body, callback)
}

FastHttp.prototype.put = function(url, body, callback) {
  this.send('PUT', url, body, callback)
}

FastHttp.prototype.delete = function(url, callback) {
  this.send('DELETE', url, null, callback)
}

const http = new FastHttp()
const baseURL = 'https://61d5a36e2b4f730017a82974.mockapi.io/users'

http.get(baseURL, (error, data) => {
  if(error) {
    console.log('Error', error)
  } else {
    console.log(data)
  }
})

// http.post(baseURL, { name: 'Tran Minh Khoa' } , (error, data) => {
//   if(error) { 
//     console.log('Error', error)
//   } else {
//     console.log(data)
//   }
// })

// http.put(`${baseURL}/6`, { name: 'Tuan-updated' }, (error, data) => {
//   if(error) { 
//     console.log('Error', error)
//   } else {
//     console.log(data)
//   }
// })

// http.delete(`${baseURL}/6`, (error, data) => {
//   if(error) { 
//     console.log('Error', error)
//   } else {
//     console.log(data)
//   }
// })