import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import Notification from './Notification'

const AnecdoteForm = () => {
    const [notification, setNotification] = useState(null)
    const dispatch = useDispatch()

    const addAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(createAnecdote(content))
        setNotification('Anecdote successfully created')
        setTimeout(() => {
            setNotification(null)
        }, 3000)
    }

    return (
        <div>
            <h2>Create new anecdote</h2>
            <Notification message={notification} />
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