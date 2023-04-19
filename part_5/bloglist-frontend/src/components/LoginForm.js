/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
  //helper function that shows only if the user is not logged-in 
const LoginForm = ({handleLogin, handleUsername, handlePassword}) => {
  return (
<>
<h2>Login</h2>
<form onSubmit={handleLogin}>
     <div>
       username <input type='text' id='username' onChange={handleUsername} />
     </div>
     <div>
       password  <input type='password' id='password' onChange={handlePassword} />
     </div>
     <button type="submit" id="login-button">login</button>
   </form>
</>
    )
}

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  handleUsername: PropTypes.func.isRequired,
  handlePassword: PropTypes.func.isRequired
}

export default LoginForm