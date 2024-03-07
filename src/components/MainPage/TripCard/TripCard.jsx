import { Link } from "react-router-dom";
import styles from "./TripCard.module.css";
import { TripInfo } from "./TripCardElements/TripInfo";
import { TripPrice } from "./TripCardElements/TripPrice";

export const TripCard = ({ id, image, title, duration, level, price }) => {
  return (
    <li data-test-id="trip-card" className={styles["trip-card"]}>
      <img data-test-id="trip-card-image" src={image} alt="trip photo" />
      <div className={styles["trip-card__content"]}>
        <TripInfo duration={duration} level={level} title={title} dataTest={"card"}/>
        <TripPrice price={price} dataTest = "card"/>
      </div>
      <Link data-test-id="trip-card-link" to={`/trip/${id}`} className="button">
        Discover a trip
      </Link>
    </li>
  );
};
