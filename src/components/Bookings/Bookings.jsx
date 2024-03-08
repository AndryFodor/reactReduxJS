import { BookingCard } from "./BookingCard";
import styles from "./Bookings.module.css"

export const Bookings = () => {
  return (
    <main className={styles["bookings-page"]} >
      <h1 className="visually-hidden">Travel App</h1>
      <ul className={styles.bookings__list} >
        <BookingCard />
        <BookingCard />
        <BookingCard />
      </ul>
    </main>
  );
};
