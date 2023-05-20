import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const AnecdoteList = ({ anecdotes }) => (
    <div>
      <h2>Anecdotes</h2>
      <ul>
        {anecdotes.map(anecdote =>
        <li key={anecdote.id}>
            
            <Link to = {`/anecdotes/${anecdote.id}`}>         
              <p> {anecdote.content} </p>
              {/* <p>`has ${anecdote.votes} votes`</p>  */}
               {/* <p>`for more info see $  {anecdote.info}`</p> */}
               </Link>
            </li>)}
      </ul>
    </div>
  )

  export default AnecdoteList