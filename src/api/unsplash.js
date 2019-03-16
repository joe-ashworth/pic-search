import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 4ab0307c9b7131c93034ee1eff6b19765067992f4ba2076209553263dd0098a4'
  }
})