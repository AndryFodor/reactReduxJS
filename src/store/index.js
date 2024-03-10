import { configureStore } from "@reduxjs/toolkit";
import tripsReducer from './tripsSlice'

export default configureStore({
    reducer: {
        trips: tripsReducer
        // bookings: bookingsReducer
    }
})