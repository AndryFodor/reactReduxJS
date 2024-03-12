import { useSelector } from "react-redux";
import styles from "./MainPage.module.css";
import { Selection } from "./Selection/Selection";
import { TripCard } from "./TripCard/TripCard";

export const MainPage = () => {
  const trips = useSelector((state => state.tripsData.trips))
  
  return (
    <main>
      <h1 className="visually-hidden">Travel App</h1>
      <Selection/>

      <section className={styles.trips}>
        <h2 className="visually-hidden">Trips List</h2>
        <ul className={styles["trip-list"]}>
          {trips.length !== 0 ? trips.map((trip, i) => (
            <TripCard key={i} {...trip} />
          )) : <p className={styles["trip-list__empty"]}>Such trips not found</p>}
        </ul>
      </section>
    </main>
  );
};
