import { Link } from "react-router-dom";
import styles from "./Sign.module.css"

export const SignIn = () => {
  return (
    <main className={styles["sign-page"]}>
      <h1 className="visually-hidden">Travel App</h1>
      <form className={styles["sign-form"]} autoComplete="off">
        <h2 className={styles["sign-form__title"]} >Sign In</h2>
        <label className="input">
          <span className="input__heading">Email</span>
          <input data-test-id="auth-email" name="email" type="email" required />
        </label>
        <label className="input">
          <span className="input__heading">Password</span>
          <input
            data-test-id="auth-password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
          />
        </label>
        <button data-test-id="auth-submit" className="button" type="submit">
          Sign In
        </button>
      </form>
      <span>
        Don't have an account?
        <Link
          data-test-id="auth-sign-up-link"
          to={"/sign-up"}
          className={styles["sign-form__link"]}
        >
          Sign Up
        </Link>
      </span>
    </main>
  );
};
