import rootReducer from './reducer'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    preloadedState: {},
    reducer: rootReducer,
    devTools: true,
    middleware: [],
})

export default store
