import ViewToggle from "./ViewToggle"

//handles the details of the blog when toggled and adds a little bit of styling to the blogs
const Blog = ({blog}) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }
  return (
  <div  style={blogStyle}>
    {blog.title} {blog.author}
    <ViewToggle buttonLabel='view'>
  https://{blog.url}/ <br/>
   likes {blog.likes} <button type="button">like</button> <br />
    {blog.author}<br/>
    </ViewToggle>
  </div>  
)
  }

export default Blog

