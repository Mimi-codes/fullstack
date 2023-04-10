import { useState } from "react"
import ViewToggle from "./ViewToggle"

//handles the details of the blog when toggled and adds a little bit of styling to the blogs
const Blog = ({blog, likeHandler, handleRemove}) => {
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

 
  const handleBlogRemoval = () => {
    handleRemove(blog)
  }


  return (
  <div  style={blogStyle}>
    {blog.title} {blog.author}
    <ViewToggle buttonLabel='view'>
  https://{blog.url}/ <br/>
   {/* likes {blog.likes}   */}
   likes {like}  
   <button onClick={increase}>like</button> <br />
    {blog.author}<br/>
    <button onClick={handleBlogRemoval}>remove</button>
   {/* <RemoveButton blogs={blogs} blogObject = {blogObject}/> */}
   
    </ViewToggle>
    {/* <p>{like}</p> */}
   
  </div>  
)
  }

export default Blog

