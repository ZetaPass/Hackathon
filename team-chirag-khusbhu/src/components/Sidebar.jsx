// Dependencies
import { Link } from "react-router-dom";

// Styles
import styles from "./styles/sidebar.module.css";

function Sidebar() {
  return (
    <>
      <aside className={styles.sidebar}>
        <div>
          <div className={styles.profile}>
            <img
              src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
              alt="human"
            />
          </div>
          <h3>User Name</h3>
          <h4>Designation</h4>
        </div>

        <nav>
          <ul>
            <Link to="/">
              <i className="ri-home-4-fill"></i>
              <span>Home</span>
            </Link>
            <Link to="/courses">
              <i className="ri-home-4-fill"></i>
              <span>Courses</span>
            </Link>
            <Link to="/events">
              <i className="ri-home-4-fill"></i>
              <span>Events</span>
            </Link>
            <Link to="/blogs">
              <i className="ri-home-4-fill"></i>
              <span>Blogs</span>
            </Link>
          </ul>
        </nav>
        <nav>
          <ul>
            <Link to="/settings">
              <i className="ri-home-4-fill"></i>
              <span>Settings</span>
            </Link>
            <Link to="/services">
              <i className="ri-home-4-fill"></i>
              <span>Services</span>
            </Link>
            <Link to="/faq">
              <i className="ri-home-4-fill"></i>
              <span>Helps and FAQ</span>
            </Link>
          </ul>
        </nav>
      </aside>
    </>
  );
}
export default Sidebar;
