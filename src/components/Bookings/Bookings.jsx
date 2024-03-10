import { BookingCard } from "./BookingCard";
import styles from "./Bookings.module.css";

export const Bookings = ({ bookings, removeBooking }) => {
  return (
    <main className={styles["bookings-page"]}>
      <h1 className="visually-hidden">Travel App</h1>
      <ul className={styles.bookings__list}>
        {bookings.length !== 0 ? bookings.map((el, idx) => (
          <BookingCard
            date={el.date}
            guests={el.guests}
            totalPrice={el.totalPrice}
            title={el.trip.title}
            key={idx}
            removeBooking = {removeBooking(el.id)}
          />
        )) : <p className={styles.booking__noBookings}>No bookings yet</p>}
      </ul>
    </main>
  );
};
