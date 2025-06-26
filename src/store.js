import { configureStore } from '@reduxjs/toolkit'
import pasteReducer  from './redux/pasteSlice'

export const store = configureStore({
    reducer: {
        paste: pasteReducer,
    },
})

// Now a slice fature is settled up