import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { MainPage } from "./components/MainPage/MainPage";
import { SignIn } from "./components/SignPages/SignIn";
import { SignUp } from "./components/SignPages/SignUp";
import { Trip } from "./components/Trip/Trip";
import { Bookings } from "./components/Bookings/Bookings";
import { state } from "./store";
import { useState } from "react";

function App() {
  let [trips, setTrips] = useState(state.tripPage.trips);
  console.log(trips);
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element = {<MainPage trips = {trips} changeTrips = {setTrips}/>}/>
        <Route path="sign-in" element = {<SignIn />}/>
        <Route path="sign-up" element = {<SignUp />}/>
        <Route path="bookings" element = {<Bookings />}/>
        <Route path="trip/:tripId" element = {<Trip />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
