// styles
import styles from "./styles/navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div>
        <h1>ZETAPASS</h1>
      </div>
      <button>
        <i className="ri-notification-fill"></i>
      </button>
    </header>
  );
};

export default Navbar;
