require('dotenv').config()
const axios = require('axios')

// recup  token
async function getToken() { // this function is to get the OAuth2 from api42
  try {
    const response = await axios.post('https://api.intra.42.fr/oauth/token', {
      grant_type: 'client_credentials',
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET
    })
    return response.data.access_token
  } catch (err) {
    console.error(err.response.data)
  }
}

module.exports = {getToken}