import React from 'react'

  //helper function that shows only if the user is not logged-in 
const LoginForm = ({handleLogin, handleUsername, handlePassword}) => {
  return (
<>
<h2>Login</h2>
<form onSubmit={handleLogin}>
     <div>
       username <input type='text' onChange={handleUsername} />
     </div>
     <div>
       password  <input type='password' onChange={handlePassword} />
     </div>
     <button type="submit">login</button>
   </form>
</>
    )
}

export default LoginForm