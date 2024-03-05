import styles from "./MainPage.module.css";
import { Selection } from "./Selection/Selection";
import { TripCard } from "./TripCard/TripCard";

export const MainPage = ({ trips, changeTrips}) => {
  return (
    <main>
      <h1 className="visually-hidden">Travel App</h1>
      <Selection changeTrips={changeTrips}/>

      <section className={styles.trips}>
        <h2 className="visually-hidden">Trips List</h2>
        <ul className={styles["trip-list"]}>
          {trips.map((trip, i) => (
            <TripCard key={i} {...trip} />
          ))}
        </ul>
      </section>
    </main>
  );
};
