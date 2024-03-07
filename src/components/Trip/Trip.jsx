import styles from "./Trip.module.css"
import { useParams } from "react-router-dom";
import { TripInfo } from "../MainPage/TripCard/TripCardElements/TripInfo";
import { TripPrice } from "../MainPage/TripCard/TripCardElements/TripPrice";

export const Trip = ({ getTrip }) => {
  const { tripId } = useParams();
  let trip = getTrip(tripId);
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
          >
            Book a trip
          </button>
        </div>
      </div>
    </main>
  );
};
