import { configureStore } from "@reduxjs/toolkit";
import tripsReducer from './slices/tripsSlice'
import bookingsReducer from './slices/bookingsSlice'

export default configureStore({
    reducer: {
        tripsData: tripsReducer,
        bookingsData: bookingsReducer
    }
})