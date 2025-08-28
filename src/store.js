import { configureStore } from '@reduxjs/toolkit'
import anecdoteReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/anecdoteFilter'

const store = configureStore({
	reducer: {
		anecdotes: anecdoteReducer,
		filter: filterReducer
	}
})

export default store