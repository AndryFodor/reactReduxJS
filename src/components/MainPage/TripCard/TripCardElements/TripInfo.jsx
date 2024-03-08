import styles from '../TripCard.module.css'

export const TripInfo = ({title, duration, level, dataTest, preDataTest}) => {
  const prefixDataT = preDataTest ? preDataTest + "-" : "";
  return (
    <div className={styles["trip-info"]}>
      <h3 data-test-id={`${prefixDataT}trip-${dataTest}-title`} className={styles["trip-info__title"]}>
        {title}
      </h3>
      <div className={styles["trip-info__content"]}>
        <span
          data-test-id={`${prefixDataT}trip-${dataTest}-duration`}
          className={styles["trip-info__duration"]}
        >
          <strong>{duration}</strong> days
        </span>
        <span
          data-test-id={`${prefixDataT}trip-${dataTest}-level`}
          className={styles["trip-info__level"]}
        >
          {level}
        </span>
      </div>
    </div>
  );
};
