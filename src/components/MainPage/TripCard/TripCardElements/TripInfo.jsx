import styles from '../TripCard.module.css'

export const TripInfo = ({title, duration, level, dataTest}) => {
  return (
    <div className={styles["trip-info"]}>
      <h3 data-test-id={`trip-${dataTest}-title`} className={styles["trip-info__title"]}>
        {title}
      </h3>
      <div className={styles["trip-info__content"]}>
        <span
          data-test-id={`trip-${dataTest}-duration`}
          className={styles["trip-info__duration"]}
        >
          <strong>{duration}</strong> days
        </span>
        <span
          data-test-id={`trip-${dataTest}-level`}
          className={styles["trip-info__level"]}
        >
          {level}
        </span>
      </div>
    </div>
  );
};
