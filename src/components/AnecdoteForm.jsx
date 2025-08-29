import { useDispatch } from 'react-redux'
import anecdoteServices from '../services/anecdote'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, clearNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        const newAnecdote = await anecdoteServices.createNew(content)
        dispatch(createAnecdote(newAnecdote))
        dispatch(setNotification('Anecdote successfully created'))
        setTimeout(() => {
            dispatch(clearNotification())
        }, 4000)
    }

    return (
        <div>
            <h2>Create new anecdote</h2>
            <form onSubmit={addAnecdote} >
                <div>
                    <input type="text" name="anecdote" />
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm