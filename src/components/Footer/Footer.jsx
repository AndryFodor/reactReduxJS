import styles from "./Footer.module.css"

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span className={styles.footer__text}>
        from
        <a className={styles.footer__link} href="https://binary-studio.com">
          binary studio
        </a>
        with
        <img className={styles.footer__icon} src="/images/heart.svg" alt="heart" />
      </span>
    </footer>
  );
};
