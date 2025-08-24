import { useSelector, useDispatch } from 'react-redux'
import { countVotes } from './reducers/anecdoteReducer'

import AnecdoteForm from '.components/AnecdoteForm'

const App = () => {
  const anecdotes = useSelector((state) => state.sort((a, b) => b.votes - a.votes))
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(countVotes(id))
  }

  return (
    <div>
      <header>
        <h1>Anecdotes</h1>
      </header>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <AnecdoteForm />
    </div>
  )
}

export default App