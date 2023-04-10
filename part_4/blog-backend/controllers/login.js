const config = require("../utils/config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const loginRouter = require("express").Router();
const User = require("../models/user");

//login functionality which includes generating web token  
// searches for the user from the database by the username attached to the request. Next, it checks the password, also attached to the request
// the bcrypt.compare method checks if the password is correct
// If the user is not found, or the password is incorrect, the request is responded to with the status code 401 unauthorized
// a token is created with the method jwt.sign if the password is correct
loginRouter.post("/", async (request, response) => {
  const { username, password } = request.body;

  const user = await User.findOne({ username });

  const passwordCorrect =
    user === null ? false : await bcrypt.compare(password, user.passwordHash);

  if (!(user && passwordCorrect)) {
    return response.status(401).json({
      error: "invalid username or password",
    });
  }

  const userForToken = {
    username: user.username,
    id: user._id,
  };

   //generates token for user if password is correct
  const token = jwt.sign(userForToken, config.SECRET);
  /*
  const token = jwt.sign(userForToken, config.SECRET, {
    expiresIn: 60 * 60,
  });
  */

  response
    .status(200)
    .send({ token, username: user.username, name: user.name });
}); 

module.exports = loginRouter;