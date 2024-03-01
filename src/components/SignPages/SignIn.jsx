import styles from "./Sign.module.css";
import { SignFooter } from "./FormFooter/SignFooter";
import { From } from "./Form/Form";

export const SignIn = () => {
  let handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <main className={styles["sign-page"]}>
      <h1 className="visually-hidden">Travel App</h1>

      <From
        initialValues={{ email: "", password: "" }}
        handleSubmit={handleSubmit}
        inputTypes={["email", "password"]}
      />

      <SignFooter formType="up" />
    </main>
  );
};
