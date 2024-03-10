import styles from "./Trip.module.css"
import { useParams } from "react-router-dom";
import { TripInfo } from "../MainPage/TripCard/TripCardElements/TripInfo";
import { TripPrice } from "../MainPage/TripCard/TripCardElements/TripPrice";
import { BookingModal } from "./BookingModal/BookingModal";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTripById } from "../../store/tripsSlice";

export const Trip = ({ addBooking }) => {
  const trip = useSelector(state => state.trips.currentTrip);
  const dispatch = useDispatch();
  const { tripId } = useParams();
  
  let [modal, setModal] = useState(false);
  const bookingModalOn = () => (setModal(true));
  const bookingModalOff = () => (setModal(false));
  dispatch(setTripById(tripId));
  let { duration, level, title, description, image, price } = trip;

  return (
    <main className={styles["trip-page"]}>
      <h1 className="visually-hidden">Travel App</h1>
      <div className={styles["trip"]} >
        <img
          data-test-id="trip-details-image"
          src={image}
          className={styles["trip__img"]}
          alt="trip photo"
        />
        <div className={styles["trip__content"]} >
          <TripInfo duration={duration} level={level} title={title} dataTest={"details"}/>
          <div
            data-test-id="trip-details-description"
            className={styles["trip__description"]}
          >
            {description}
          </div>
          <TripPrice price={price} dataTest={"details"}/>
          <button
            data-test-id="trip-details-button"
            className= {styles.trip__button + " button"}
            onClick={bookingModalOn}
          >
            Book a trip
          </button>
        </div>
      </div>
      {modal && <BookingModal trip = {trip} closeModal = {bookingModalOff} addBooking={addBooking}/>}
    </main>
    
  );
};
