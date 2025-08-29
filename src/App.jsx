import { useEffect } from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import Notification from './components/Notification'
import {useDispatch } from 'react-redux'
import anecdoteServices from './services/anecdote'
import { setAnecdote } from './reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    anecdoteServices.getAll()
      .then(anecdote => dispatch(setAnecdote(anecdote)))
  }, [dispatch])

  return (
    <div>
      <header>
        <h1>Anecdotes</h1>
      </header>
      <Notification />
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App