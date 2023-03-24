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
      <h3>log in to application</h3>
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