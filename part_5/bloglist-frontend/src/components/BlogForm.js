/* eslint-disable */
import React, {useState} from 'react'

const BlogForm = ({ addBlog, titleValue, handleTitleChange, authorValue, handleAuthorChange, urlValue, handleUrlChange}) => {
  const [newBlog, setNewBlog] = useState('')
  

  return (
    <>
      <h2>create a new blog</h2>
        <form onSubmit={addBlog}>
          title:
          <input type="text" value={titleValue} onChange={handleTitleChange} id='title' /> <br />
          author: <input
            type="text"
            value={authorValue}
            onChange={handleAuthorChange}
           id='author'
          />
          <br />
          url: <input type="text" value={urlValue} onChange={handleUrlChange}
          id='url' />  <br />
          {/* <input value={newBlog} onChange={handleBlogChange} /> */}
          <button id='create-btn' type="submit">save</button>
        </form>
    </>
  )
}

export default BlogForm