import { Form, Formik } from "formik";
import { Label } from "./Label";
import styles from "../Sign.module.css";
import { passwordValidate } from "../../../utils/validators";

export const From = ({ initialValues, handleSubmit, inputTypes}) => {
  let keys = Object.keys(initialValues);
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ errors, touched }) => (
        <Form className={styles["sign-form"]} autoComplete="off">
          <h2 className={styles["sign-form__title"]}>Sign In</h2>
          {keys.map((el, i) => {
            if (el === "password") {
              return (
                <Label
                  key={i}
                  attributes={{
                    "data-test-id": "auth-password",
                    name: "password",
                    type: "password",
                    autoComplete: "new-password",
                    required: true,
                    className:
                      errors.password && touched.password ? "errorField" : "",
                  }}
                  title={"Password"}
                  validField={{
                    name: "password",
                    errors,
                    touched,
                    validator: passwordValidate,
                  }}
                />
              );
            } else {
              return (
                <Label
                  key={i}
                  attributes={{
                    "data-test-id": `auth-${el}`,
                    name: el,
                    type: inputTypes[i],
                    required: true,
                  }}
                  title={el.charAt(0).toUpperCase() + el.slice(1)}
                />
              );
            }
          })}
          <button data-test-id="auth-submit" className="button" type="submit">
            Sign In
          </button>
        </Form>
      )}
    </Formik>
  );
};
