import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import { ProNav } from "./ProNav/ProNav";

export const Header = () => {
  const location = useLocation();
  let isProBar = !location.pathname.includes("sign");
  
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <Link
          to={"/"}
          data-test-id="header-logo"
          className={styles.header__logo}
        >
          Travel App
        </Link>
        {isProBar && <ProNav />}
      </div>
    </header>
  );
};
