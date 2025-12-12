import SignupForm from "../components/SignupForm";
import styles from "./Signup.module.css";

function Signup() {
  return (
    <section className={styles.container}>
      <SignupForm />
    </section>
  );
}

export default Signup;
