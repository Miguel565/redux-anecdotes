import { useSelector, useDispatch } from 'react-redux'
import { countVotes } from '../reducer/anecdoteReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector((state) => state.sort((a, b) => b.votes - a.votes))
    const dispatch = useDispatch()

    const vote = (id) => {
        dispatch(countVotes(id))
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
                            <button onClick={() => vote(anecdote.id)}>vote</button>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default AnecdoteList