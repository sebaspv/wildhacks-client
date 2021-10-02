import { configureStore } from '@reduxjs/toolkit'
import animalReducer from './animalSlice';

export default configureStore({
    reducer: {
        animal: animalReducer,
    },
})