import styles from "./Sign.module.css";
import { SignFooter } from "./FormFooter/SignFooter";
import { From } from "./Form/Form";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  let navigate = useNavigate();
  let handleSubmit = (values, actions) => {
    console.log(values);
    navigate("/")
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
