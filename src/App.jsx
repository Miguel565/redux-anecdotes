import AnecdoteForm from '.components/AnecdoteForm'
import AnecdoteList from '.components/AnecdoteList'

const App = () => {
  return (
    <div>
      <header>
        <h1>Anecdotes</h1>
      </header>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App