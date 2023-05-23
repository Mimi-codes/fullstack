/* eslint-disable */
//sends HTTP POST request to the server address api/login to enable users to login
import axios from 'axios'

//server address
const baseUrl = '/api/login'

//uses the async/await syntax instead of promises
const login = async (credentials) => {
  const response = await axios.post(baseUrl, credentials)
  // console.log(response.data)
  return response.data
}

export default { login }
