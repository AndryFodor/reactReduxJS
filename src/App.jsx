import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { MainPage } from "./components/MainPage/MainPage";
import { SignIn } from "./components/SignPages/SignIn";
import { SignUp } from "./components/SignPages/SignUp";
import { Trip } from "./components/Trip/Trip";
import { Bookings } from "./components/Bookings/Bookings";
import { useState } from "react";

function App() {
  // let [trips, setTrips] = useState(tripsState);
  let [bookings, setBookings] = useState([]);
  const addBooking = (newBooking) => {
    let sortedBooking = sortBookings([...bookings, newBooking]);
    setBookings(sortedBooking);
  };
  const deleteBooking = (id) => () => {
    setBookings(bookings.filter((el) => el.id !== id));
  };

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

  const searchTripById = (id) => trips.filter((el) => el.id === id)[0];

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="*"
          element={<MainPage/>}
        />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route
          path="bookings"
          element={
            <Bookings bookings={bookings} removeBooking={deleteBooking} />
          }
        />
        <Route
          path="trip/:tripId"
          element={<Trip getTrip={searchTripById} addBooking={addBooking} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
