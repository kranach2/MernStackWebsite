import React from "react";
import { Link} from "react-router-dom";
import styles from "../css/Navbar.module.css";
//import pic from "../images/logo.png";
import Logo from "../components/Logo";
import "@fortawesome/fontawesome-free/css/all.min.css";
const Navbar = (props) => {
  return (
      <div className={styles.mainContainer}>
    <div className={styles.navBar}>
        <div className={styles.logo}>
      <Link to="/">
       <Logo />
      </Link>
      </div>
      <div className={styles.menu}>
      <ul>
        <li>
          <Link className={styles.link} to="/">
            HOME
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/about">
            ABOUT
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/blogs">
            BLOG
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/resume">
            RESUME
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/contact">
            CONTACT
          </Link>
        </li>
        <li>  
          <Link className={styles.link} onClick={props.handleClick} to = "#">
          <i className="fas fa-bars"></i>
          </Link>
        </li>
      </ul>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
