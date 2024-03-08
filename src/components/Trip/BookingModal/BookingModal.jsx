import { BookingForm } from "./BookingForm";
import styles from "./BookingModal.module.css";

export const BookingModal = ({ trip, closeModal }) => {
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
            onClick={closeModal}
          >
            ×
          </button>
          <BookingForm trip = {trip} closeModal = {closeModal}/>
        </div>
      </div>
    </div>
  );
};
