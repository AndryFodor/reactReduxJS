import { Link } from "react-router-dom";
import styles from "./Sign.module.css"

export const SignUp = () => {
  return (
    <main className={styles["sign-page"]} >
      <h1 className="visually-hidden">Travel App</h1>
      <form className={styles["sign-form"]} autoComplete="off">
        <h2 className={styles["sign-form__title"]} >Sign Up</h2>
        <label className="input">
          <span className="input__heading">Full name</span>
          <input
            data-test-id="auth-full-name"
            name="full-name"
            type="text"
            required
          />
        </label>
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
          Sign Up
        </button>
      </form>
      <span>
        Already have an account?
        <Link
          data-test-id="auth-sign-in-link"
          to={"/sign-in"}
          className={styles["sign-form__link"]}
        >
          Sign In
        </Link>
      </span>
    </main>
  );
};
