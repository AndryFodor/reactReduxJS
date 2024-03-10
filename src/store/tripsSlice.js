import { createSlice } from "@reduxjs/toolkit";
import trips from "./trips.json"

const tripsSlice = createSlice({
    name: "tripsReducer",
    initialState: {
        trips: trips,
        currentTrip: null
    },
    reducers: {
        changeTrips(state, action) {
            state.trips = searchTrips(action.payload);
        },
        setTripById(state, action){
            state.currentTrip = state.trips.filter((el) => el.id === action.payload)[0];
        }
    }
})

const searchByName = (trips, title) =>
    trips.filter((el) =>
        el.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())
    );
const searchByLevel = (trips, level) =>
    trips.filter((el) => el.level === level);
const searchByDuration = (trips, duration) => {
    let res = [];
    trips.forEach((el) => {
        if (duration.length === 1 && el.duration > duration[0]) {
            res.push(el);
        } else if (
            duration.length === 2 &&
            el.duration >= duration[0] &&
            el.duration < duration[1]
        ) {
            res.push(el);
        }
    });
    return res;
};

const searchTrips = (searchData) => {
    let duration = searchData.duration.split("_x_").map(Number);
    let searchRes = [{}];
    if (searchData.search && searchData.duration && searchData.level) {
        searchRes = searchByDuration(

            (
                searchByName(trips, searchData.search),
                searchData.level
            ),
            duration
        );
    } else if (searchData.search && searchData.duration) {
        searchRes = searchByDuration(
            searchByName(trips, searchData.search),
            duration
        );
    } else if (searchData.search && searchData.level) {
        searchRes = searchByLevel(
            searchByName(trips, searchData.search),
            searchData.level
        );
    } else if (searchData.level && searchData.duration) {
        searchRes = searchByDuration(
            searchByLevel(trips, searchData.level),
            duration
        );
    } else if (searchData.search) {
        searchRes = searchByName(trips, searchData.search);
    } else if (searchData.level) {
        searchRes = searchByLevel(trips, searchData.level);
    } else if (searchData.duration) {
        searchRes = searchByDuration(trips, duration);
    } else {
        searchRes = trips;
    }
    return searchRes;
};

export const {changeTrips, setTripById} = tripsSlice.actions

export default tripsSlice.reducer