import { Link } from "react-router-dom";
import styles from "./sidebar.module.css"


function Sidebar() {

  return (
    <>
      <aside className={styles.sidebar}>
        <div>
          <div className={styles.profile}>
            <img
              src="https://images.pexels.com/photos/6918619/pexels-photo-6918619.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
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
              <span >Home</span>
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
