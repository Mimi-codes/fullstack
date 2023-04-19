/* eslint-disable */
import { useState, useEffect } from "react";
import Blog from "./components/Blog";
import BlogForm from "./components/BlogForm";
import LoginForm from "./components/LoginForm";
import Notification from "./components/Notification";
import RemoveButton from "./components/RemoveButton";
import Togglable from "./components/Togglable";
import Toggle from "./components/Togglable";
import blogService from "./services/blogs";
import loginService from "./services/login";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");
  const [loginVisible, setLoginVisible] = useState(false);
  //fetches the blogs data from database
  useEffect(() => {
    blogService.getAll().then((blogs) => {
           setBlogs(blogs)
    })
  }, [])

  //local storage saves the user's login detail even when the browser is refreshed. This is achieved by saving a value corresponding to a certain key to the database with the method setItem and the value of a key can be found with the method getItem.
  //here, using the useEffect hook, the application checks if user details of a logged-in user can already be found on the local storage. If they can, the details are saved to the state of the application and to blogService.
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedBlogappUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      blogService.setToken(user.token);
    }
  }, []);

  //EVENT LISTENERS
  //this event handler is responsible for login and must be changed to call the method noteService.setToken(user.token) with a successful login
  const handleLogin = async (e) => {
    e.preventDefault();
    // method for handling the login
    //the form fields are emptied and the server response (including a token and the user details) is saved to the user field of the application's state if the login is successful.
    //the user is notified if the login fails or running the function loginService.login results in an error
    try {
      const user = await loginService.login({
        username,
        password, 
      });

      window.localStorage.setItem("loggedBlogappUser", JSON.stringify(user));
      //setToken imported from blog.js and changes the value of private variable token in blog.js module
      blogService.setToken(user.token);
      setUser(user);
      setUsername("");
      setPassword("");
    } catch (exception) {
      //display notification for wrong login details
      setErrorMessage("wrong username or password");
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  //event handler that allows user to input values
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  //event handler that allows user to input values
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const authorHandler = (e) => {
    setAuthor(e.target.value);
  };

  const urlHandler = (e) => {
    setUrl(e.target.value);
  };

const loginVisibleHandler = (e) => {
e.preventDefault()
setLoginVisible(true)
}

const loginCancelHandler = (e) => {
  e.preventDefault()
  setLoginVisible(false)
  }
  

   // creates new blog
  const addBlog = (e) => {
    e.preventDefault();
    const blogObject = {
      title,
      author,
      url,
    };
    // console.log('button clicked', e.target)
    blogService.create(blogObject).then((returnedBlog) => {
      setBlogs(blogs.concat(returnedBlog));
      // setNewBlog('')
    });
    //display notification for added blog for 5secs
    setErrorMessage(`a new blog ${title} by ${user.name} added`);
    setTimeout(() => {
      setErrorMessage(null);
    }, 5000);
  };
  // console.log(blogs);


  //handles logging out of user
  const handleLogout = () => {
    window.localStorage.removeItem("loggedBlogappUser");
    setUser(null);
  };

  //removes blog 
  const handleRemove = (blogObject) => {
    if (
      window.confirm(`Remove blog ${blogObject.title} by ${blogObject.author}`)
    ) {
      setBlogs(blogs.filter((elem) => blogObject.id !== elem.id));
      blogService.remove(blogObject.id);
    }
    // console.log(blogObject, 'error')
  }


  return (
    <>
      <h2>Blogs</h2>
      {/* passes errorMessage as a prop to message which is then also passed as a prop to Notification component  */}
      <Notification message={errorMessage} />
      {/* line 94 only shows the login form if the user is not logged in   */}
      {!user &&  
      <Togglable buttonLabel='log in'>
<LoginForm
 handleLogin={handleLogin}
 handleUsername={handleUsername}
 handlePassword={handlePassword}
/>
      </Togglable>

}
      {/* line 97 shows the logged in user's name(generated from the backend), the blogForm and existing blogs */}
      {user && (
        <div>
          <p>
            {user.name} is logged in{" "}
            <button onClick={handleLogout}>logout</button>
          </p>
          <Togglable buttonLabel='blog form'>
    <BlogForm 
    addBlog={addBlog}
    titleValue ={title}
    handleTitleChange = {titleHandler}
    authorValue = {author}
    handleAuthorChange = {authorHandler}
    urlValue ={url}
    handleUrlChange = {urlHandler}
    />
  </Togglable>

          {blogs.length < 1 ? 'No blog' : blogs.map((blog, i) => (
            <>
            <Blog 
            key={'blog'+ i} 
            blog={blog}
            setBlogs = {setBlogs}
            blogService = {blogService}
          handleRemove = {handleRemove}
          likeHandler = {blog.likes}
            />
          </>
          ))}
          
        </div>
      )}
    </>
  );
};

export default App;
