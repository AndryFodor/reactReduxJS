import { configureStore } from "@reduxjs/toolkit";
import tripsReducer from './tripsSlice'
import bookingsReducer from './bookingsSlice'

export default configureStore({
    reducer: {
        trips: tripsReducer,
        bookings: bookingsReducer
    }
})