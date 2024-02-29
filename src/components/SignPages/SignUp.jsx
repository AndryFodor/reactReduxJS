import { Link } from "react-router-dom";
import styles from "./Sign.module.css";
import { Field, Form, Formik } from "formik";
import { passwordValidate } from "../../utils/validators";

export const SignUp = () => {
  let onSubmit = (values) => {
    console.log(values);
  }
  return (
    <main className={styles["sign-page"]}>
      <h1 className="visually-hidden">Travel App</h1>
      <Formik
        initialValues={{
            "full-name": "",
            email: "",
            password: ""
        }}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form className={styles["sign-form"]} autoComplete="off">
            <h2 className={styles["sign-form__title"]}>Sign Up</h2>
            <label className="input">
              <span className="input__heading">Full name</span>
              <Field
                data-test-id="auth-full-name"
                name="full-name"
                type="text"
                required
              />
            </label>
            <label className="input">
              <span className="input__heading">Email</span>
              <Field
                data-test-id="auth-email"
                name="email"
                type="email"
                required
              />
            </label>
            <label className="input">
              <span className="input__heading">Password</span>
              <Field
                className = {errors.password && touched.password ? "errorField" : ""}
                data-test-id="auth-password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                validate = {passwordValidate}
              />
              {errors.password && touched.password &&
              (<div className="errorMsg">Error: {errors.password}</div>)}
            </label>
            <button data-test-id="auth-submit" className="button" type="submit">
              Sign Up
            </button>
          </Form>
        )}
      </Formik>

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
