import RemoveButton from "./RemoveButton"
import ViewToggle from "./ViewToggle"

//handles the details of the blog when toggled and adds a little bit of styling to the blogs
const Blog = ({blog, handleRemove, blogService, update}) => {
 
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

  
  const likeHandler = async () => {
    blogService
        .likeBlog(blog)
        // .then(() => {
            // update(blog)
        // })
        console.log('clicked')
}


  return (
  <div  style={blogStyle}>
    {blog.title} {blog.author}
    <ViewToggle buttonLabel='view'>
  https://{blog.url}/ <br/>
   likes {blog.likes}  
   <button onClick={likeHandler}>like</button> <br />
    {blog.author}<br/>
    <button onClick={handleBlogRemoval}>remove</button>
   {/* <RemoveButton blogs={blogs} blogObject = {blogObject}/> */}
    </ViewToggle>
  </div>  
)
  }

export default Blog

