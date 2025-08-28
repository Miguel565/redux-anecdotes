import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
    name: 'filter',
    initialState: 'ALL',
    reducers: {
        filterChange(state, action){
            if (action.type !== 'ALL'){
                return action.payload
            }
            return state
        }
    }
})

export const { filterChange } = filterSlice.actions
export default filterSlice.reducer