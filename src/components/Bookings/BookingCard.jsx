import styles from "./Bookings.module.css";

export const BookingCard = ({title, guests, date, totalPrice}) => (
  <li data-test-id="booking" className={styles.booking}>
    <h3 data-test-id="booking-title" className={styles.booking__title}>
      {title}
    </h3>
    <span data-test-id="booking-guests" className={styles.booking__guests}>
      {guests} guests
    </span>
    <span data-test-id="booking-date" className={styles.booking__date}>
      {date.slice(0, 10)}
    </span>
    <span data-test-id="booking-total" className={styles.booking__total}>
      {totalPrice} $
    </span>
    <button
      data-test-id="booking-cancel"
      className={styles.booking__cancel}
      title="Cancel booking"
    >
      <span className="visually-hidden">Cancel booking</span>×
    </button>
  </li>
);
