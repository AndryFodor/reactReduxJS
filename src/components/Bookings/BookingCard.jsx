import styles from "./Bookings.module.css";

export const BookingCard = () => (
  <li data-test-id="booking" className={styles.booking}>
    <h3 data-test-id="booking-title" className={styles.booking__title}>
      Iceland
    </h3>
    <span data-test-id="booking-guests" className={styles.booking__guests}>
      2 guests
    </span>
    <span data-test-id="booking-date" className={styles.booking__date}>
      2024-07-13
    </span>
    <span data-test-id="booking-total" className={styles.booking__total}>
      14000 $
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
