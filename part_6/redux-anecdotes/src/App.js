import { useSelector, useDispatch } from 'react-redux'
import reducer from './reducers/anecdoteReducer'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch(reducer(vote))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
<AnecdoteForm />
<AnecdoteList />
    </div>
  )
}

export default App