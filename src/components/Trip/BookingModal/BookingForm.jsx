import { Form, Formik } from "formik";
import { TripInfo } from "../../MainPage/TripCard/TripCardElements/TripInfo";
import { Label } from "../../SignPages/Form/Label";
import styles from "./BookingModal.module.css"
import { notEarlierThenToday } from "../../../utils/validators";
import { v4 } from "uuid";
import { useDispatch } from "react-redux";
import { addBookings } from "../../../store/bookingsSlice";

export const BookingForm = ({ trip, closeModal }) => {
  const dispatch = useDispatch();
  const submitHandler = (values) => {
    values = {
      ...values,
      date: new Date(values.date).toISOString(),
      totalPrice: values.guests * trip.price,
      trip: {
        title: trip.title,
        duration: trip.duration,
        price: trip.price
      },
      id: v4()
    };
    dispatch(addBookings(values))
    closeModal();
    
  };
  return (
    <Formik initialValues={{ date: "", guests: "1" }} onSubmit={submitHandler}>
      {({ errors, touched, values }) => (
        <Form className={styles["book-trip-popup__form"]} autoComplete="off">
          <TripInfo
            dataTest={"popup"}
            preDataTest={"book"}
            duration={trip.duration}
            level={trip.level}
            title={trip.title}
          />
          <Label
            title={"Date"}
            attributes={{
              "data-test-id": "book-trip-popup-date",
              name: "date",
              type: "date",
              required: true,
            }}
            validField={{
                name: "date",
                errors,
                touched,
                validator: notEarlierThenToday
            }}
          />
          <Label
            title={"Number of guests"}
            attributes={{
              "data-test-id": "book-trip-popup-guests",
              name: "guests",
              type: "number",
              min: "1",
              max: "10",
              required: true,
            }
        }/>
          <span className={styles["book-trip-popup__total"]} >
            Total:
            <output
              data-test-id="book-trip-popup-total-value"
              className={styles["book-trip-popup__total-value"]}
            >
              {trip.price * values.guests}$
            </output>
          </span>
          <button
            data-test-id="book-trip-popup-submit"
            className="button"
            type="submit"
          >
            Book a trip
          </button>
        </Form>
      )}
    </Formik>
  );
};
