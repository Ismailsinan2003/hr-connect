import LoginForm from "../components/LoginForm";
import styles from "./Login.module.css";

function Login() {
  return (
    <section className={styles.section}>
      <LoginForm />
    </section>
  );
}

export default Login;
