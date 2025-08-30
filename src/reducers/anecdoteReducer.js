import { createSlice } from '@reduxjs/toolkit'
import anecdoteServices from '../services/anecdote'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    appendAnecdote(state, action) {
      state.push(action.payload)
    },

    countVotes(state, action) {
      const id = action.payload
      const anecdoteToChange = state.find(n => n.id === id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }
      return state.map(anecdote => anecdote.id === id ? changedAnecdote : anecdote)
    },

    setAnecdote(state, action){
      return action.payload
    }
  }
})

export const initializeAnecdote = () => {
  return async dispatch => {
    const anecdotes = await anecdoteServices.getAll()
    dispatch(setAnecdote(anecdotes))
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteServices.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const countVotes = (anecdote) => {
  return async dispatch => {
    const updatedAnecdote = await anecdoteServices.update(anecdote.id, { ...anecdote, votes: anecdote.votes + 1})
    dispatch(updatedAnecdote)
  }
}

export const {
  appendAnecdote,
  setAnecdote
} = anecdoteSlice.actions
export default anecdoteSlice.reducer