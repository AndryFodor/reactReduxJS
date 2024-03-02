import styles from "./Sign.module.css";
import { SignFooter } from "./FormFooter/SignFooter";
import { From } from "./Form/Form";

export const SignIn = () => {
  let handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <main className={styles["sign-page"]}>
      <h1 className="visually-hidden">Travel App</h1>

      <From
        initialValues={{ email: "", password: "" }}
        handleSubmit={handleSubmit}
        inputTypes={["email", "password"]}
        SignMode={"in"}
      />

      <SignFooter formType="up" />
    </main>
  );
};
