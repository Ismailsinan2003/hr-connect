import styles from "./SignupForm.module.css";

function SignupForm() {
  return (
    <>
      <div className={styles.signupImg}>
        <img src="/signup-header-logo.png" alt="" />
      </div>
      <div className={styles.form}>
        <div className={styles.container}>
          <div className={styles.header}>
            <img src="/logo-img.svg" alt="" />
            <h4>Sign Up</h4>
          </div>
          <form className={styles.credentials}>
            <label>User Type *</label>
            <select>
              <option value="">Select user type</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
            <label>Name *</label>
            <input type="text" />

            <label>Email *</label>
            <input type="text" />

            <label>Password *</label>
            <input type="password" />

            <button>Next</button>
          </form>
          <p>
            Have an Account ?<span> Log In</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignupForm;
