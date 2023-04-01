import React, {useState} from 'react'

const BlogForm = ({ addBlog, titleValue, handleTitleChange, authorValue, handleAuthorChange, urlValue, handleUrlChange}) => {
  const [newBlog, setNewBlog] = useState('')
  

  return (
    <>
      <h2>create a new blog</h2>
        <form onSubmit={addBlog}>
          title:
          <input type="text" value={titleValue} onChange={handleTitleChange} /> <br />
          author: <input
            type="text"
            value={authorValue}
            onChange={handleAuthorChange}
          />
          <br />
          url: <input type="text" value={urlValue} onChange={handleUrlChange} /> <br />
          {/* <input value={newBlog} onChange={handleBlogChange} /> */}
          <button type="submit">save</button>
        </form>
    </>
  )
}

export default BlogForm