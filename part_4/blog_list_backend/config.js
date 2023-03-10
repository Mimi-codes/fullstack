import dotenv from 'dotenv'

dotenv.config()
//handles the  environment variables
const PORT = process.env.PORT

let MONGODB_URL = process.env.MONGODB_URI

if (process.env.NODE_ENV === 'test') {
  MONGODB_URL = process.env.TEST_MONGODB_URI
}

export default {
  MONGODB_URL,
  PORT
}