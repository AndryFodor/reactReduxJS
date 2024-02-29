import { Link } from "react-router-dom";
import styles from "./ProNav.module.css"
import { HiddenButtons } from "./HiddenButtons";

export const ProNav = () => {
  return (
    <nav data-test-id="header-nav" className={styles.header__nav}>
      <ul className={styles["nav-header__list"]}>
        <li className={styles["nav-header__item"]} title="Bookings">
          <Link
            data-test-id="header-bookings-link"
            to={"/bookings"}
            className={styles["nav-header__inner"]}
          >
            <span className="visually-hidden">Bookings</span>
            <img src="/images/briefcase.svg" alt="bookings" />
          </Link>
        </li>
        <li className={styles["nav-header__item"]} title="Profile">
          <div
            data-test-id="header-profile-nav"
            className={`${styles["nav-header__inner"]} ${styles["profile-nav"]}`}
            tabIndex="0"
          >
            <span className="visually-hidden">Profile</span>
            <img src="/images/user.svg" alt="profile" />
            <HiddenButtons />
          </div>
        </li>
      </ul>
    </nav>
  );
};
