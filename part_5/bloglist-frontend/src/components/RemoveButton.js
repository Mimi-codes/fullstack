/* eslint-disable */
import React from 'react'

const RemoveButton = ({ blogs, blogObject, blogService, setBlogs}) => {
    const removeStyle = {
        paddingTop: 1,
    paddingLeft: 4,
    border: 'none',
    borderRadius: 3,
    borderWidth: 1,
    marginBottom: 5,
    backgroundColor: 'blue'
    }

    const handleRemove = (blogObject) => {
      if (
        window.confirm(`Remove blog ${blogObject.title} by ${blogObject.author}`)
      ) {
        setBlogs(blogs.filter((elem) => blogObject.id !== elem.id));
        blogService.remove(blogObject.id);
      }
      console.log(blogObject, 'error')
    }
  
        

  return (
    <>
    <button type='button' style={removeStyle} onClick={handleRemove}>remove</button>
    </>
  )
}

export default RemoveButton