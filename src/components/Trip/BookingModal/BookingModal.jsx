import { BookingForm } from "./BookingForm";
import styles from "./BookingModal.module.css";

export const BookingModal = ({ trip }) => {
  return (
    <div>
      <div className={styles.modal}>
        <div
          data-test-id="book-trip-popup"
          className={styles["book-trip-popup"]}
        >
          <button
            data-test-id="book-trip-popup-close"
            className={styles["book-trip-popup__close"]}
          >
            ×
          </button>
          <BookingForm trip = {trip}/>
        </div>
      </div>
    </div>
  );
};
