import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.paraContainer}>
      <p className={styles.para}>
          &copy; 2019 Kishor Rana Chhetri. All rights reserved. Full Stack
          Developer
        </p>
      </div>
<div className={styles.details}>
<ul className={styles.itemList}>
  <li><Link className={styles.link} to="/terms-of-service">
                Terms of Service
              </Link></li>
  <li><Link className={styles.link} to="/privacy-policy">
                Privacy Policy
              </Link></li>
</ul>
</div>
<div className={styles.socialIcons}>
  <ul className={styles.socialIconsList}>
    <li><a
            className={styles.socialLink}
            href="https://www.facebook.com/kkeysor.rana"
            target="_self"
          >
            <i
              style={{ color: "rgb(59, 89, 152)" }}
              className="fab fa-facebook"
            ></i>
          </a></li>
    <li><a className={styles.socialLink} href="https://www.instagram.com/keysor19/"
            target="_self">
            <i
              style={{ color: "rgb(247,119,55)" }}
              className="fab fa-instagram"
            ></i>
          </a></li>
  <li> <a className={styles.socialLink} href="https://www.linkedin.com/in/kishor-rana-chhetri/"
            target="_self">
            <i
              style={{ color: "rgb(40,103,178)" }}
              className="fab fa-linkedin"
            ></i>
          </a></li>
  </ul>

</div>
    </div>
  );
};
export default Footer;
