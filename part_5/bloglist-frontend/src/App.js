import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import Notification from './components/Notification'
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

//local storage saves the user's login detail even when the browser is refreshed. This is achieved by saving a value corresponding to a certain key to the database with the method setItem and the value of a key can be found with the method getItem.
  //here, using the useEffect hook, the application checks if user details of a logged-in user can already be found on the local storage. If they can, the details are saved to the state of the application and to blogService.
useEffect(() => {
  const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
  if (loggedUserJSON) {
    const user = JSON.parse(loggedUserJSON)
    setUser(user)
    blogService.setToken(user.token)
  }
}, [])

//event listeners
//this event handler is responsible for login and must be changed to call the method noteService.setToken(user.token) with a successful login
const handleLogin = async (e) => {
  e.preventDefault()
  // method for handling the login
  //the form fields are emptied and the server response (including a token and the user details) is saved to the user field of the application's state if the login is successful.
//the user is notified if the login fails or running the function loginService.login results in an error
  try {
    const user = await loginService.login({
      username, password,
    })
    //setToken imported from blog.js and changes the value of private variable token in blog.js module 
    blogService.setToken(user.token)
    setUser(user)
    setUsername('')
    setPassword('')
  } catch (exception) {
    setErrorMessage('wrong username or password')
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


  //helper function that shows the form for adding new blogs only if the user 

  const addBlog = (e, title, author, url) => {
    e.preventDefault()
    const blogObject = {
      "title": title,
      "author": author,
      "url": url
    }
  
    blogService
    .create(blogObject)
    .then(returnedBlog => {
      setBlogs(blogs.concat(returnedBlog))
      setNewBlog('')
    })
  }

  const blogForm = () => {
    return (
      <>      <h2>create new</h2>
    <form onSubmit={addBlog}>
     title:<input type='text'/> <br/>
     author: <input type='text' /> <br/>
     url: <input type='text' /> <br/>
      {/* <input value={newBlog} onChange={handleBlogChange} /> */}
      <button type='submit'>save</button>
    </form>
    </>
    ) 
  }

  //handles logging out of user
  const handleLogout = () => {
    window.localStorage.removeItem('loggedBlogappUser')
    setUser(null)
  }
  
  return (
    <>
    <h2>Blogs</h2>
    {/* passes errorMessage as a prop to message which is then also passed as a prop to Notification component  */}
    <Notification message={errorMessage}/>
      {/* line 94 only shows the login form if the user is not logged in   */}
{!user && loginForm()} 
{/* line 97 shows the logged in user's name(generated from the backend), the blogForm and existing blogs */}
{user && <div>
  <p>{user.name} is logged in <button onClick={handleLogout}>logout</button></p>
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

  