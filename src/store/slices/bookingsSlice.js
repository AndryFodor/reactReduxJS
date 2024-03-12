import { createSlice } from "@reduxjs/toolkit";


const bookingsSlice = createSlice({
    name: "bookingReducer",
    initialState: {
        bookings: []
    },
    reducers: {
        addBookings(state, action) {
            // в action.payload має міститися правильний об'єкт замовлення
            state.bookings = sortBookings([...state.bookings, action.payload]);
        },
        // тут в action.payload має міститися id подорожі, яку слід видалити
        deleteBooking(state, action) {
            state.bookings = state.bookings.filter((el) => el.id !== action.payload)
        }
    }
});

const sortBookings = (bookings) => {
    const length = bookings.length,
        res = [...bookings];
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            const date1 = res[j].date.slice(0, 10);
            const date2 = res[j + 1].date.slice(0, 10);
            const [year1, month1, day1] = date1.split("-").map(Number);
            const [year2, month2, day2] = date2.split("-").map(Number);
            if (
                year1 > year2 ||
                (year1 === year2 && month1 > month2) ||
                (year1 === year2 && month1 === month2 && day1 > day2)
            ) {
                const temp = res[j];
                res[j] = res[j + 1];
                res[j + 1] = temp;
            }
        }
    }
    return res;
};


export default bookingsSlice.reducer;

export const { addBookings, deleteBooking } = bookingsSlice.actions