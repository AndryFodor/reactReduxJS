import { Link } from "react-router-dom"
import styles from "./SignFooter.module.css"

export const SignFooter = ({formType}) => {
    return (
        <span>
        {formType === "up" ? "Don't have an account?" : "Already have an account?"}
        <Link
          data-test-id={`auth-sign-${formType}-link`}
          to={`/sign-${formType}`}
          className={styles["sign-form__link"]}
        >
          Sign {formType[0].toUpperCase() + formType[1]}
        </Link>
      </span>
    )
}