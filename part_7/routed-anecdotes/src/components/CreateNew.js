import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AnecdoteList from './AnecdoteList'
import { useField } from '../hooks'

const CreateNew = ({addNew}) => {
    // const [content, setContent] = useState('')
    // const [author, setAuthor] = useState('')
    // const [info, setInfo] = useState('')
  const navigate = useNavigate()
  const content = useField('text')
  const author = useField('text')
  const info = useField('text')
  
    const handleSubmit = (e) => {
      e.preventDefault()
      addNew({
        content: content.value,
        author: author.value,
        info: info.value
    })
      navigate('/')
    }
  
    return (
      <div>
        <h2>create a new anecdote</h2>
        <form onSubmit={handleSubmit}>
        <div>
          content
           <input {...content} />
        </div>
        <div>
          author 
          <input {...author} />
        </div>
        <div>
          info <input {...info} />
        </div>
          <button>create</button>
           </form>
      </div>
    )
  
  }
  export default CreateNew