import styles from '../TripCard.module.css'

export const TripPrice = ({price, dataTest}) => {
  return (
    <div className={styles["trip-price"]}>
      <span>Price</span>
      <strong
        data-test-id={`trip-${dataTest}-price-value`}
        className={styles["trip-price__value"]}
      >
        {price} $
      </strong>
    </div>
  );
};
