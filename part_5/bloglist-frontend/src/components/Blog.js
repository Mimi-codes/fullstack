/* eslint-disable */
import { useState } from "react"
import RemoveButton from "./RemoveButton"
import ViewToggle from "./ViewToggle"

//handles the details of the blog when toggled and adds a little bit of styling to the blogs
const Blog = ({blog, likeHandler, handleRemove, blogObject}) => {
  //state updating function of the likes
 const [like, setLike] = useState(likeHandler)
const increase = () => {
setLike(like + 1)
}

  const blogStyle = {
    paddingTop: 1,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 1,
    marginTop: 6
  }

  const removeStyle = {
    paddingTop: 1,
paddingLeft: 4,
border: 'none',
borderRadius: 3,
borderWidth: 1,
marginBottom: 5,
backgroundColor: 'blue'
}
 
  const handleBlogRemoval = () => {
    handleRemove(blog)
  }


  return (
  <div  style={blogStyle} className="blog">
    {blog.title} {blog.author}
    <ViewToggle buttonLabel='view' className = 'togglableContent'>
https://{blog.url}/ <br/>
likes {like} 
   <button onClick={increase}>like</button> <br />
    {blog.author}<br/>
    <button onClick={handleBlogRemoval} style={removeStyle}>remove</button>
   {/* <RemoveButton blogs={blogs} blogObject = {blogObject}/> */}
 
    </ViewToggle>
   
  </div>  
)
  }

export default Blog

