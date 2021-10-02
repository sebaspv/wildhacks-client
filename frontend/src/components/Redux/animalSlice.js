import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    animals: [],
}

export const counterSlice = createSlice({
    name: 'animal',
    initialState,
    reducers: {
        addAnimal(state, action) {
            state.animals.push(action.payload)
        }
    },
})

// Action creators are generated for each case reducer function
export const { addAnimal } = counterSlice.actions

export const selectAnimals = state => state.animal.animals

export default counterSlice.reducer