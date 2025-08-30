import { useSelector, useDispatch } from 'react-redux'
import { countVotes } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector((state) => {
        if (state.filter === 'ALL') {
            return [...state.anecdotes].sort((a, b) => b.votes - a.votes)
        } else {
            return state.anecdotes
                .filter(anecdote => anecdote.content.toLowerCase().includes(state.filter.toLowerCase()))
                .sort((a, b) => b.votes - a.votes)
        }
    })
    const dispatch = useDispatch()

    const vote = (anecdote) => {
        dispatch(countVotes(anecdote))
    }

    return (
        <div>
            <ul>
                {anecdotes.map(anecdote =>
                    <li key={anecdote.id} >
                        <div>
                            {anecdote.content}
                        </div>
                        <div>
                            has {anecdote.votes}
                            <button onClick={() => vote(anecdote)}>vote</button>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default AnecdoteList