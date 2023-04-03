import RemoveButton from "./RemoveButton"
import ViewToggle from "./ViewToggle"

//handles the details of the blog when toggled and adds a little bit of styling to the blogs
const Blog = ({blog, handleRemove, blogService, setBlogs}) => {
 
  const blogStyle = {
    paddingTop: 1,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 1,
    marginTop: 6
  }

  const handleLikeChange = async (blog) => {
    await blogService.update(blog.id, {
      'title': blog.title,
      'author': blog.author,
      'url': blog.url,
      'likes': blog.likes + 1,
    })

    const blogs = await blogService.getAll()
    setBlogs(blogs)
  }



  return (
  <div  style={blogStyle}>
    {blog.title} {blog.author}
    <ViewToggle buttonLabel='view'>
  https://{blog.url}/ <br/>
   likes {blog.likes}  
   <button onClick={handleLikeChange}>like</button> <br />
    {blog.author}<br/>
    <button onClick={handleRemove}>remove</button>
   {/* <RemoveButton blogs={blogs} blogObject = {blogObject}/> */}
    </ViewToggle>
  </div>  
)
  }

export default Blog

