import styles from "./LoginForm.module.css";
// import Button from "./Button";

function LoginForm() {
  function onSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={onSubmit}>
        <img src="/logo-img.svg" alt="" />
        <h4>Log In</h4>
        <div className={styles.credentials}>
          <label>Name *</label>
          <input type="text" />

          <label>Password *</label>
          <input type="text" />
          <button>Next</button>
          <p>
            Don't have an Account ?<span> Sign Up</span>
          </p>
        </div>
      </form>

      <div>
        <img src="/login-img.svg" alt="" />
      </div>
    </div>
  );
}

export default LoginForm;
