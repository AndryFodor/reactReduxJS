import styles from "./Sign.module.css";
import { SignFooter } from "./FormFooter/SignFooter";
import { From } from "./Form/Form";

export const SignUp = () => {
  let onSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <main className={styles["sign-page"]}>
      <h1 className="visually-hidden">Travel App</h1>
      <From initialValues={{
          "full-name": "",
          email: "",
          password: "",
        }}
        handleSubmit={onSubmit}
        inputTypes={["text", "email", "password"]}
        SignMode={"up"}/>
      <SignFooter formType="in" />
    </main>
  );
};
