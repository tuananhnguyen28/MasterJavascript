// RESRful API là gì

// Tạo với 3 cơ chế: callback, promise và async await
function FastHttp() {
  this.xhr = new XMLHttpRequest()
}

FastHttp.prototype.get = function(url, callback) {
  this.xhr.onreadystatechange = function() {
    if(this.readyState === 4) {
      if(this.status === 200 || this.status === 201) {
        callback(null, JSON.parse(this.responseText))
      } else {
        callback(this.responseText)
      }
    }
  }
  this.xhr.open('GET', url, true)
  this.xhr.send()
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