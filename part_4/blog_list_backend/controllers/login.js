import bcrypt from 'bcrypt'
import express from 'express'
import jwt from 'jsonwebtoken'

import { User } from '../models/user.js'

const loginRouter = express.Router()

//login functionality which includes generating web token  
// searches for the user from the database by the username attached to the request. Next, it checks the password, also attached to the request
// the bcrypt.compare method checks if the password is correct
// If the user is not found, or the password is incorrect, the request is responded to with the status code 401 unauthorized
// a token is created with the method jwt.sign if the password is correct
loginRouter.post('/', async (request, response) => {
  const body = request.body

  const user = await User.findOne({ "username": body.username })
  const passwordCorrect = user === null
    ? false : await bcrypt.compare(body.password, user.passwordHash)

  if (!(user && passwordCorrect)) {
    return response.status(401).json({
      "error": 'invalid username or password'
    })
  }

  const userForToken = {
    "username": user.username,
    "id": user._id,
  }

    //generates token for user if password is correct
  const token = jwt.sign(userForToken, process.env.SECRET)

  response.status(200).send({
    "token": token,
    "username": user.username,
    "name": user.name
  })
})

export { loginRouter }