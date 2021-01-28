class GitHub{
  constructor(){
    this.clientId = 'e9347fb9c67916af3e83';
    this.clientSecret = 'c05241582628e1a31365452d1f25fe2538c6e3dc';
  }

  async getUser(user){
    const userPromise = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_sercret=${this.clientSecret}`);
    const profile = await userPromise.json();
    return {profile};
  }
}