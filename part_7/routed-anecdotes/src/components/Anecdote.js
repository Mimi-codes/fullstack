import React from 'react'
import { useParams } from 'react-router-dom'

const Anecdote = ({anecdotes}) => {
const color = {
    color: 'blue'
}

    const id = useParams().id
const anecdote = anecdotes.find(n => n.id === Number(id))
    return (
    <div>
<h2>{anecdote.content}</h2>
<p>has {anecdote.votes} vote</p>
<p>for more info, see <a href='' style={color}>{anecdote.info}</a></p>
    </div>
  )
}

export default Anecdote