import { createSlice } from '@reduxjs/toolkit'
import anecdoteServices from '../services/anecdote'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
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

export const {
  createAnecdote,
  countVotes,
  setAnecdote
} = anecdoteSlice.actions
export default anecdoteSlice.reducer