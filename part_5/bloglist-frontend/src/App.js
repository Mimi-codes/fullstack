import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [newBlog, setNewBlog] = useState('')

 //fetches the blogs data
 useEffect(() => {
  blogService.getAll().then(blogs =>
    setBlogs( blogs )
  )  
}, [])

//event listeners
const handleLogin = async (e) => {
  e.preventDefault()
  // method for handling the login
  //the form fields are emptied and the server response (including a token and the user details) is saved to the user field of the application's state if the login is successful.
//the user is notified if the login fails or running the function loginService.login results in an error
  try {
    const user = await loginService.login({
      username, password,
    })
    blogService.setToken(user.token)
    setUser(user)
    setUsername('')
    setPassword('')
  } catch (exception) {
    setErrorMessage('Wrong credentials')
    setTimeout(() => {
      setErrorMessage(null)
    }, 5000)
  }
}

  //event handler that allows user to input values
  const handleUsername = (e) => {
    setUsername(e.target.value)
    console.log(e.target.value)
    }

    //event handler that allows user to input values
    const handlePassword = (e) => {
    setPassword(e.target.value)
    }
    
     //helper function that shows the form for adding new blogs only if the user is logged-in, so user contains the user details
  //event listener 
  const addBlog = (e) => {
    e.preventDefault()
      }
    
  const handleBlogChange = (e) => {
    setNewBlog(e.target.value)
      }
    

  //helper function that shows only if the user is not logged-in 
  const loginForm = () => {
    //login form input 
    return(
     <form onSubmit={handleLogin}>
     <div>
       username <input type='text' value={username} onChange={handleUsername} />
     </div>
     <div>
       password  <input type='password' value={password} onChange={handlePassword} />
     </div>
     <button type="submit">login</button>
   </form>
    )
  }

  ////helper function that shows the form for adding new blogs only if the user 
  const blogForm = () => {
    return (
    <form onSubmit={addBlog}>
      <input value={newBlog} onChange={handleBlogChange} />
      <button type='submit'>save</button>
    </form>
    ) 
  }

  return (
    <>
    <h2>Blogs</h2>
      {/* line 94 only shows the login form if the user is not logged in   */}
{!user && loginForm()} 
{/* line 97 shows the logged in user's name(generated from the backend), the blogForm and existing blogs */}
{user && <div>
  <p>{user.name} is logged in</p>
  {blogForm()}
  {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
  </div>
  }
    
    </>
  )
}

export default App

