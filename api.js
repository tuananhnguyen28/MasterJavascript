class Api {

  constructor() {
    this.client_id = '9103871ad757df8164eb'
    this.client_secret = '28f0399bbdfe5397504439775de45ff871217991'
  }

  async getInfo(username) {

    const getProfile = fetch(`https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.
    client_secret}`).then(
      (res) => 
        res.json().then((json) => {
          if(res.ok) { return json }
          throw json.message
        })
      )  
    
    const getRepo = fetch(`https://api.github.com/users/${username}/repos?client_id=${this.
    client_id}&client_secret=${this.client_secret}`).then(res => res.json())
    
    // Không cần get lần lượt từng cái
    const [profile, repos] = await Promise.all([getProfile, getRepo])
    return {
      profile, 
      repos
    }

  }

}