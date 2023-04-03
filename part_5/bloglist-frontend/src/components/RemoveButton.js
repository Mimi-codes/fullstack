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

    const removeBlog = (blogObject) => {
        if (
          window.confirm(`Remove blog ${blogObject.title} by ${blogObject.author}`)
        ) {
          setBlogs(blogs.filter((elem) => blogObject.id !== elem.id));
          blogService.remove(blogObject.id);
        }
      };
    
        

  return (
    <>
    <button type='button' style={removeStyle} onClick={removeBlog}>remove</button>
    </>
  )
}

export default RemoveButton