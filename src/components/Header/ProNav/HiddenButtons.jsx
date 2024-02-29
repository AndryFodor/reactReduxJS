import { Link } from "react-router-dom"
import styles from "./ProNav.module.css"

export const HiddenButtons = () => {
    return (
        <ul
        data-test-id="header-profile-nav-list"
        className={styles["profile-nav__list"]}
      >
        <li
          data-test-id="header-profile-nav-username"
          className={styles["profile-nav__item"]}
        >
          John Doe
        </li>
        <li className={styles["profile-nav__item"]}>
          <Link
            data-test-id="header-profile-nav-sign-out"
            to="/sign-in"
            className={`${styles["profile-nav__sign-out"]} button`}
          >
            Sign Out
          </Link>
        </li>
      </ul>
    )
}