//connects this frontend code to the backend database by setting a proxy port for the backend in package.json and running both ports simultaneously

import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import loginService from './services/login'
import blogService from './services/blogs'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [newBlogTitle, setNewBlogTitle] = useState('')
  const [newBlogAuthor, setNewBlogAuthor] = useState('')
  const [newBlogUrl, setNewBlogUrl] = useState('')
  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('') 
  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

//fetches data from db.json
useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

//handles the permanent storage of the login  
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  //saves the blog object which has the format for the blog data
  const addBlog = (event) => {
    event.preventDefault()
    const blogObject = {
      title: newBlogTitle,
      author: newBlogAuthor,
      url: newBlogUrl
    }

    blogService
      .create(blogObject)
        .then(returnedBlog => {
        setBlogs(blogs.concat(returnedBlog))
        setNewBlogTitle('')
        setNewBlogAuthor('')
        setNewBlogUrl('')
      })
  }

//handles input values based on each keystroke by the user
  const handleBlogTitleChange = (event) => {
    setNewBlogTitle(event.target.value)
  }

  const handleBlogAuthorChange = (event) => {
    setNewBlogAuthor(event.target.value)
  }

  const handleBlogUrlChange = (event) => {
    setNewBlogUrl(event.target.value)
  }

//handles the login
  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password,
      })
      blogService.setToken(user.token)
      window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(user)
      ) 
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setErrorMessage('wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }
//this is the login form to have access to create blogs
  const loginForm = () => (
    <form onSubmit={handleLogin}>
      <h3>Log in to application</h3>
      <div>
        username
          <input
          type="text"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        password
          <input
          type="password"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">login</button>
    </form>      
  )
  
//this is displayed only if the login data entered by the user is correct
  const blogForm = () => (
    <form onSubmit={addBlog}>
    <h2>Create new</h2>
     <div>
       title:<input
        value={newBlogTitle}
        onChange={handleBlogTitleChange}
      />
      </div>
      <div>
      author:<input
        value={newBlogAuthor}
        onChange={handleBlogAuthorChange}
      />
      </div>
      <div>
      url: <input
        value={newBlogUrl}
        onChange={handleBlogUrlChange}
      /> 
      </div>
      <button type="submit">create</button>
    </form>  
  )

  return (
    <div>
        {/* {blogs.map(blog => */}
        {/* // <Blog key={blog.id} blog={blog} />  */}
      {/* // )} */}
      {/* conditional rendering which displays blog details for logged in user and otherwise for users with wrong login details       */}
{!user && loginForm()} 
      {user && <div>
        <h2>Blogs</h2>
          {/* (`a new blog ${blogs} added`) */}
        <p>{user.name} logged in <button>logout</button></p>
          {blogForm()}
          {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} /> 
      )}
        

        </div>
      } 

    
    </div>
  )
}

export default App

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

  //event handler that prevents default form submission with the login button
const handleLogin = async(e) => {
  e.preventDefault()
  // method for handling the login
  //the form fields are emptied and the server response (including a token and the user details) is saved to the user field of the application's state if the login is successful.
//the user is notified if the login fails or running the function loginService.login results in an error,.
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
  

  //helper function that shows only if the user is not logged-in 
const loginForm = () => {
return (
  //login form input 
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

  //helper function that shows the form for adding new blogs only if the user is logged-in, so user contains the user details
  //event listener 
  const addBlog = (e) => {
    e.preventDefault()
      }
    
      
  const handleBlogChange = (e) => {
    setNewBlog(e.target.value)
      }
    

  const blogForm = () => {
    return (
<form onSubmit={addBlog}>
  <input value={newBlog} onChange={handleBlogChange} />
  <button type='submit'>save</button>
</form>
    )
}



  return (
    <div>
      <h2>Blogs</h2>
      {/* <Notification message = {errorMessage} />  */}
        {/* conditionally renders the loginForm and blogForm helper functions */}
     {/* line 94 only shows the login form if the user is not logged in   */}
       {!user === loginForm()} 
      
       {/* line 97 shows the logged in user's name(generated from the backend) and the blogForm  */}
    
       {user && <div>
       <p>{user.name} logged in</p>
         {blogForm()}
      </div>
    }
     {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
     </div>
   )
 }

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
  //log out button

const logOutUser = () => {
  // const logout =  window.localStorage.removeItem('loggedBlogappUser')
  return (
    <button type='button'>log out</button>

  )
}